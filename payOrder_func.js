"use strict";

var PayOrder = require("./model/payOrder").payOrderModel;



function getPayOrder(data) {
    var payOrder = {};
    payOrder = new PayOrder(data);
    return payOrder;
}
exports.getPayOrder = getPayOrder;

