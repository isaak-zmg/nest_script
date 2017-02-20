"use strict";

var EventModel = require("./creatEvent_func");
var GetOrder = require("./order_func");
var GetPayOrder = require("./payOrder_func");
var GetImport = require("./import_func");
var GetRefund = require("./refund_func");


var Creat = require("./services/creatEvent");
var Order = require("./services/order");
var PayOrder = require("./services/payOrder");
var Imports = require("./services/import");
var Refund = require("./services/refund");
var Check = require("./services/check");


var eventModel = EventModel;
var eventInfo;
var paymentID;

Creat.creat(eventModel).then(function (res) {                        //创建活动
    eventInfo = res.result;                                          //获取活动信息
    var tokenInfo = GetOrder.getToken(eventInfo)
    return Order.token(tokenInfo)
})
    .then((token_res) => {
        var orderInfo = GetOrder.getOrder(eventInfo);
        return Order.order(orderInfo).then(order_res => {
            return {
                token_res,
                order_res
            }
        });
    })
    .then((res) => {
        paymentID = res.order_res.result.id;
        var payOrderInfo = GetPayOrder.getPayOrder(res.order_res.result);
        payOrderInfo.payment_transaction_token = res.token_res.id;
        return PayOrder.payOrder(payOrderInfo, paymentID);
    })
    .then(function () {
        var importInfo = GetImport.getImport(eventInfo);
        return Imports.imports(importInfo, eventInfo.id);
    })
    .then(function () {
        return Refund.payment(paymentID);
    })
    .then(function (payment_res) {
        var ss = JSON.parse(payment_res);
        var paymentInfo = ss.result;
        var refundInfo = GetRefund.getRefund(paymentInfo);
        return Refund.refund(paymentID, refundInfo);
    })
    .then(function () {
        return Check.check_search(eventInfo.id, "name", "chenlei");
    })
    .then(function name(res) {
        var result = JSON.parse(res)
        var currentIndex = 0;
        function test() {
            if (currentIndex >= result.result.items.length) {
                return;
            }
            if (!result.result.items[currentIndex].has_checked) {
                Check.checkin(eventInfo.id, result.result.items[currentIndex].barcode)
                    .then(function (data) {
                        console.log(data.result.check_code + " be check");
                        currentIndex++;
                        test();
                    });
            }
        }
        test();
    });




// Creat.creat(eventModel).then(function (res) {                        //创建活动
//     eventInfo = res.result;                                          //获取活动信息
//     setInterval(() => {
//         test(eventInfo)
//     }, 1000)
//     //setInterval(test, 100, eventInfo)
// })



/*
 *  客户端拿取token
 */
// function test(eventInfo) {
//     var tokenInfo = GetOrder.getToken(eventInfo)
//     Order.token(tokenInfo)
//         .then((token_res) => {
//             var orderInfo = GetOrder.getOrder(eventInfo);
//             return Order.order(orderInfo).then(order_res => {
//                 return {
//                     token_res,
//                     order_res
//                 }
//             });
//         }).then((res) => {
//             paymentID = res.order_res.result.id;
//             var payOrderInfo = GetPayOrder.getPayOrder(res.order_res.result);
//             payOrderInfo.payment_transaction_token = res.token_res.id;
//             return PayOrder.payOrder(payOrderInfo, paymentID);
//         })
// }


/*
 *  服务器端拿取token
 */

// var paymentID;
// function test() {
//     var orderInfo = GetOrder.getOrder(eventInfo)
//     Order.order(orderInfo)
//         .then((order_res)=> {
//             var paymentID = order_res.result.id;
//             var payOrderInfo = GetPayOrder.getPayOrder(order_res.result);
//             return PayOrder.payOrder(payOrderInfo, order_res.result.id);
//         })
// }