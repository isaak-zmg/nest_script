"use strict";

var eventModel = require("./model/creat_events").eventModel;
var Tickets = require("./model/creat_events").ticket;
var Discount = require("./model/creat_events").discount;
var Donation = require("./model/creat_events").donation;


var event = {};

event = new eventModel(event);
var tempId = -1001;
//设定票的种类
var tickets = [
    {
        name: "t1",
        fee_type: 2, //exclude
        price: 10000,
        merchant_fee: 1000,
        tax: 1000,
        quantity: 100,
        order_min_quantity: 0,
        order_max_quantity: 10,
        default_ticket_quantity: 0,
        description: "for t1",
        placement_index: 1,
        is_set_sale_time: true
    },
    {
        name: "t2",
        fee_type: 1,  //include
        price: 10000,
        merchant_fee: 1000,
        tax: 1000,
        quantity: 100,
        order_min_quantity: 0,
        order_max_quantity: 10,
        default_ticket_quantity: 0,
        description: "for t2",
        placement_index: 2,
        is_set_sale_time: true
    },
    {
        name: "free",
        fee_type: 2,
        price: 0,
        merchant_fee: 0,
        tax: 0,
        quantity: 100,
        order_min_quantity: 0,
        order_max_quantity: 10,
        default_ticket_quantity: 0,
        description: "for free",
        placement_index: 3,
        is_set_sale_time: true
    }
];

for (var i = 0; i < tickets.length; i++) {
    var ticketInfo = {};
    ticketInfo = new Tickets(ticketInfo);
    ticketInfo.name = tickets[i].name;
    ticketInfo.fee_type = tickets[i].fee_type;
    ticketInfo.price = tickets[i].price;
    ticketInfo.merchant_fee = tickets[i].merchant_fee;
    ticketInfo.tax = tickets[i].tax;
    ticketInfo.stock_quantity = tickets[i].quantity;
    ticketInfo.order_max_quantity = tickets[i].order_max_quantity;
    ticketInfo.order_min_quantity = tickets[i].order_min_quantity;
    ticketInfo.description = tickets[i].description;
    ticketInfo.placement_index = tickets[i].placement_index;
    ticketInfo.temp_id = tickets[i].temp_id;
    ticketInfo.temp_id = tempId - i - 1;
    ticketInfo.is_set_sale_time = tickets[i].is_set_sale_time;
    event.addTicket(ticketInfo);
}


//设定折扣码

var discounts = [
    {
        amount: 1000,
        code: "all",
        group_id: 1,
    },
    {
        amount: 2000,
        code: "t1",
        group_id: 2,
    },
    {
        amount: 2000,
        code: "t2",
        group_id: 3,
    }
];

for (var i = 0; i < discounts.length; i++) {
    var discountInfo = {};
    discountInfo = new Discount(discountInfo);
    discountInfo.amount = discounts[i].amount;
    discountInfo.coupon_code = discounts[i].code;
    discountInfo.group_id = discounts[i].group_id;
    if (discounts[i].code == "all") {
        discountInfo.applied_to_ticket_temp_id = [event.tickets[0].temp_id, event.tickets[1].temp_id];
    }
    if (discounts[i].code == "t1") {
        discountInfo.applied_to_ticket_temp_id = [event.tickets[0].temp_id];
    }
    if (discounts[i].code == "t2") {
        discountInfo.applied_to_ticket_temp_id = [event.tickets[1].temp_id];
    }
    discountInfo.id = tempId - i - 10;
    event.addDiscount(discountInfo);
}


//设定捐赠
var donations = [
    {
        name: "sos1",
        description: "help",
        placement_index: 1,
    },
    {
        name: "sos2",
        description: "help",
        placement_index: 2,
    }
];

for (var i = 0; i < donations.length; i++) {
    var donationInfo = {};
    donationInfo = new Donation(donationInfo);
    donationInfo.name = donations[i].name;
    donationInfo.description = donations[i].name;
    donationInfo.placement_index = donations[i].placement_index;
    donationInfo.temp_id = tempId - i - 20;
    event.addDonations(donationInfo);
};

//设置分享奖励的票
event.share_promotion_setting.reward_ticket_id = event.tickets[0].temp_id;

//console.log(event);
module.exports = event;