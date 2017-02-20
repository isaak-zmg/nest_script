"usr strict";

var refundModel = function (data){
    var self = this;
    self.attendees = [
        {
            id: data.attendees[0].id,
            amount_to_refund: data.attendees[0].ticket.amount,
            is_full_refund: true,
            need_void: true
        },
        {
            id: data.attendees[1].id,
            amount_to_refund: data.attendees[1].ticket.amount,
            is_full_refund: true,
            need_void: true
        },
        {
            id: data.attendees[2].id,
            need_void: true
        }
    ];
    self.donation_items = [
        {
            amount_to_refund: data.order_donation_items[0].amount,
            is_full_refund: true,
            id: data.order_donation_items[0].id
        },
        {
            amount_to_refund: data.order_donation_items[1].amount,
            is_full_refund: true,
            id: data.order_donation_items[1].id
        }
    ];
    self.refund_message = "heiheiheihei"
}
exports.refundModel = refundModel;