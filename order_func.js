"use strict";

var OrderModel = require("./model/order").orderModel;
var TokenModel = require("./model/pay_token").payToken;



function getOrder(data) {
    var order = {};
    order = new OrderModel(data);
    return order;
}
exports.getOrder = getOrder;

function getToken(data) {
    var token = {};
    token = new TokenModel(data);
    return token;
}
exports.getToken = getToken; 