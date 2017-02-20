"use strict";
var moment = require("moment");


var payToken = function (data) {
    var self = this;
    self.key = "pk_test_h8ZZPhZij2GihuSZYxjF60kh";
    self.payment_user_agent = "stripe.js/d5cfa86";
    self.card = {
        address_zip: data.customer_zip_code || "132123",
        cvc: 123,
        exp_month: moment().utc().format("M"),
        exp_year: moment().format("YYYY"),
        number: "4242424242424242"
    }
}
exports.payToken = payToken;

