"use strict";
var moment = require("moment");

//客户端拿token
// var payOrderModel = function (data){
//     var self = this;
//     self.bank_card_info = {
//         address_zip: data.customer_zip_code || "ASDZXC",
//         card_number: "4242424242424242"
//     };
//     self.payment_transaction_token = data;
//     self.referral_user_name = "Sparxo Splash Page";
// }
// exports.payOrderModel = payOrderModel;


//服务器端拿取token
var payOrderModel = function (data){
    var self = this;
    self.bank_card_info = {
        address_zip: data.customer_zip_code || "ASDZXC",
        card_cvv2: "123",
        card_expiration_month: moment().utc().format("M"),
        card_expiration_year: moment().format("YYYY"),
        card_name: 'zmg',
        card_number: "4242424242424242"
    };
    self.referral_user_name = "Sparxo Splash Page";
}
exports.payOrderModel = payOrderModel;

