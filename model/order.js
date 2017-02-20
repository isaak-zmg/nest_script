"use strict";

var orderModel = function (data) {
    var self = this;
    self.customer_email_address = data.customer_email_address || "2176768924@qq.com";
    self.customer_first_name = data.customer_first_name || "zhou";
    self.customer_last_name = data.customer_last_name || "maoguo";
    self.customer_phone_number = data.customer_phone_number || "13981779999";
    self.customer_zip_code = data.customer_zip_code || "132123";
    self.event_id = data.id;
    self.event_schedule_id = data.schedules[0].id;
    //self.payment_method = data.payment_method || "StripeTokenDirect";
    self.payment_method = data.payment_method || 1;
    self.discount_ids = [
        data.discounts[0].id
    ];
    self.donations = [
        {
            id: data.donations[0].id,
            amount: 10000,
        },
        {
            id: data.donations[1].id,
            amount: 10000,
        }
    ];
    self.question_answers = [];
    self.tickets = [
        {
            id: data.tickets[0].id,
            quantity: 1,
            attendees: [
                {
                    email_address: "2176768924@qq.com",
                    first_name: "yu",
                    last_name: "bo"
                }
            ]
        },
        {
            id: data.tickets[1].id,
            quantity: 1,
            attendees: [
                {
                    email_address: "907530627@qq.com",
                    first_name: "chen",
                    last_name: "lei"
                }
            ]
        },
        {
            id: data.tickets[2].id,
            quantity: 1,
            attendees: [
                {
                    email_address: "907530627@qq.com",
                    first_name: "tu",
                    last_name: "kai"
                }
            ]
        }
    ];
};

orderModel.prototype.addDiscount_id = function (discount_id) {
    this.discount_ids.push(discount_id);
};
orderModel.prototype.addDonation = function (donation){
    this.donations.push(donation);
};
orderModel.prototype.addTicket = function (ticket){
    this.tickets.push(ticket);
};

exports.orderModel = orderModel;