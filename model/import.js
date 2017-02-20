"use strict";

var importModel = function (data) {
    var self = this;
    self.event_schedule_id = data.schedules[0].id;
    self.tickets = [
        {
            customer_first_name: "import",
            customer_last_name: "chenlei",
            customer_email_address: "907530627@qq.com",
            customer_phone_number: "13888888888",
            quantity: 2,
            remark: "for chenlei",
            id: data.tickets[0].id
        },
        {
            customer_first_name: "import",
            customer_last_name: "yubo",
            customer_email_address: "907530627@qq.com",
            customer_phone_number: "13888888888",
            quantity: 2,
            remark: "for yubo",
            id: data.tickets[1].id
        },
        {
            customer_first_name: "import",
            customer_last_name: "tukai",
            customer_email_address: "907530627@qq.com",
            customer_phone_number: "13888888888",
            quantity: 2,
            remark: "for tukai",
            id: data.tickets[2].id
        }
    ]
}
exports.importModel = importModel;