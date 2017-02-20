"use strict";

var RefundModel = require("./model/refund").refundModel;



function getRefund(data) {
    var refund = {};
    refund = new RefundModel(data);
    return refund;
}
exports.getRefund = getRefund;

