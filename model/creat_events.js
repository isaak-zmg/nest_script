"use strict";
var moment = require("moment");

var eventModel = function (data) {
    var self = this;
    self.is_clone = false;
    self.id = data.id || 0;
    self.time_zone_id = "Pacific Standard Time";
    self.default_currency = "USD";
    self.image_crop_info = {
        w: 1000,
        h: 376.2755102040816,
        x1: 0,
        x2: 1000,
        y1: 50,
        y2: 426
    };
    self.image_url = "https://image-cache.sparxo.com/sparxo.app.ticketing/31677984695975936/87300690bdd74fb1b2c855cdb7a284d8.jpg";
    self.lat = 37.7749295;
    self.lng = -122.41941550000001;
    self.map_zoom = 9;
    self.location = "San Francisco, CA, United States";
    self.name = data.name || moment().format("YYYY-MM-DDTHH-mm-ss");
    self.region = "";
    self.long_description = "<p><span style=\"line-height: 1.42857; background-color: initial;\">Event Description</span><br></p><p><br></p>";
    self.short_description = "";
    self.status = 1;
    self.type = 1;
    self.url_name = self.name;
    self.merchant_id = 0;
    self.show_event_date = true;
    self.skip_event_landing_page = false;
    self.skip_collect_attendee_information = false;
    self.show_ticket_sales_time_count_down = true;
    self.show_remaining_ticket_count = true;
    self.need_collect_phone_number = true;
    self.need_collect_zip_code = true;
    self.is_set_tickets_total_capacity = true;
    self.tickets_total_capacity = data.tickets_total_capacity || 300;
    self.tickets = [];
    self.is_set_discounts = true;
    self.discounts = [];
    self.is_set_addtional_info = false;
    self.questions = [];
    self.is_set_donations = true;
    self.donations = [];
    self.is_set_confirm_email = true;
    self.confirmation_email_greeting = "<p>Email Greating</p>";
    self.confirmation_email_support_email = "zhoumaoguo888@gmail.com";
    self.confirmation_email_support_phone = "13981779909";
    self.is_confirmation_email_include_tickets = true;
    self.is_set_notification_email = true;
    self.purchased_notification_emails = "";
    self.sold_out_notification_emails = "zhoumaoguo888@gmail.com";
    self.is_set_terms_and_conditions = true;
    self.terms_and_conditions = "<p>Term and Conditions</p>";
    self.is_set_conversion_tracking_code = false;
    self.facebook_conversion_tracking_code = false;
    self.schedules = [
        {
            id: 0,
            end_time_utc: data.eTime || moment().add(20, 'days').utc().format("YYYY-MM-DDTHH:mm:ss") + "Z",
            begin_time_utc: data.bTime || moment().add(2, 'days').utc().format("YYYY-MM-DDTHH:mm:ss") + "Z",
        }
    ];
    self.is_set_social_promotions = true;
    self.facebook_page = {
        share_url_way: 1
    };
    self.share_promotion_setting = {
        is_enabled: true,
        according_to: 1,
        according_to_value: 3,
        reward_item: 1,
        reward_ticket_id: "heihei",
        reward_value: "1",
        id: 0
    };
    self.splash_page = {
        is_active: true,
        theme: 0,
        id: 0
    }
}

eventModel.prototype.addTicket = function (ticket) {
    this.tickets.push(ticket);
};
eventModel.prototype.addDiscount = function (discount) {
    this.discounts.push(discount);
};
eventModel.prototype.addQuestion = function (question) {
    this.questions.push(question);
};
eventModel.prototype.addDonations = function (donation) {
    this.donations.push(donation);
};

exports.eventModel = eventModel;




var ticket = function (data) {
    var self = this;
    self.description = data.description || "this is description";
    self.expand_description = true;
    self.fee_type = data.fee_type || 2;
    self.is_active = true;
    self.merchant_fee = data.merchant_fee || 0;
    self.name = data.name || "New Ticket";
    self.order_max_quantity = data.order_max_quantity || 10;
    self.order_min_quantity = data.order_min_quantity || 0;
    self.default_ticket_quantity = data.default_ticket_quantity || 0;
    self.placement_index = data.placement_index || 1;
    self.stock_quantity = data.quantity || 100;
    self.specific_message = "";
    self.tax = data.tax || 0;
    self.price = data.price || 10000;
    self.temp_id = data.temp_id || "";
    self.id = data.id || 0;
    self.can_delete = data.can_delete || true;
    self.sale_begin_time_utc = moment().utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
    self.sale_end_time_utc = moment().add(20, 'days').utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
}
exports.ticket = ticket;

var discount = function (data) {
    var self = this;
    self.amount = data.amount || 1000;
    self.maximum_amount = null;
    self.coupon_code = data.code || "all";
    self.group_id = data.group_id || 1;
    self.applied_to_ticket_temp_id = data.applied_to_ticket_temp_id || [];
    self.id = data.id || 0;
}
exports.discount = discount;

var donation = function (data) {
    var self = this;
    self.can_delete = data.can_delete || true;
    self.id = data.id || 0;
    self.name = data.name || "sos";
    self.description = data.description || "help";
    self.sale_begin_time_utc = data.sale_begin_time_utc || moment().utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
    self.sale_end_time_utc = data.sale_end_time_utc || moment().add(20, 'days').utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
    self.placement_index = data.placement_index || 1;
    self.is_active = data.is_active || true;
    self.temp_id = data.temp_id || 0;
}
exports.donation = donation;