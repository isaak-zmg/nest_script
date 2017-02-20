"use strict";

var request = require("request");
var Promise = require("promise");
var config = require("../config");

function payment(id) {
    var url = config.apiRoot + "1/orders/" + id;
    console.log("GET", url);
    return new Promise(function (resolve, reject) {
        request.get({
            url: url,
            headers: {
                'Authorization': "Bearer znLpKOE7yGaO9DHZ9opdHuVUTRBqIDo8wELReGjoJxF71kK27bCABwHCIXUSC7bZk7E-t8wApLZ_Ixki_WrAlMdAVOEHjZ9z7sYp06MfO_IWe_NK31P2LFEMqwwCfPQys5JP_TA1Kqq6dSE7JNevxuzJvKNqfrPCXPZaGq-IObDGOTgR9VR_6E_s_Te2ROJirtCd1uiBtYQG-SE3Xw7spHDnmEhoWI6ZPKCb6sAjJiWe6bdg05m_dbv0T54bDQu-PTj8zstbBsr_wUWXRjhWfz3oLj_a8VsrfxkCNzpDSJJEUXVkM1AeeTsdCah0D2-ri05FvMcF34wL4QlGiSK2am1a8DoVDjRnZK1Z4248A9f0FfeeSapOmlf96cccu0F_OpvBJg"
            }
        },
            function (err, httpResponse, body) {
                var res = JSON.parse(body);
                if (err) reject(err);
                else {
                    if (res.success) {
                        console.log('getpayment success!');
                        resolve(body);
                    } else {
                        console.log(res.error.message);
                    }
                }
            });
    })
}
exports.payment = payment;

function refund(id, model) {
    var url = config.apiRoot + "1/orders/" + id + "/refund_and_void";
    console.log("POST", url);
    return new Promise(function (resolve, reject) {
        request.post({
            url: url,
            headers: {
                'Authorization': "Bearer znLpKOE7yGaO9DHZ9opdHuVUTRBqIDo8wELReGjoJxF71kK27bCABwHCIXUSC7bZk7E-t8wApLZ_Ixki_WrAlMdAVOEHjZ9z7sYp06MfO_IWe_NK31P2LFEMqwwCfPQys5JP_TA1Kqq6dSE7JNevxuzJvKNqfrPCXPZaGq-IObDGOTgR9VR_6E_s_Te2ROJirtCd1uiBtYQG-SE3Xw7spHDnmEhoWI6ZPKCb6sAjJiWe6bdg05m_dbv0T54bDQu-PTj8zstbBsr_wUWXRjhWfz3oLj_a8VsrfxkCNzpDSJJEUXVkM1AeeTsdCah0D2-ri05FvMcF34wL4QlGiSK2am1a8DoVDjRnZK1Z4248A9f0FfeeSapOmlf96cccu0F_OpvBJg"
            },
            json: true,
            body: model
        },
            function (err, httpResponse, body) {
                if (err) reject(err);
                else {
                    if (body.success) {
                        console.log('refund and void success!');
                        resolve(body);
                    } else {
                        console.log(body.error.message);
                    }
                }
            });
    })
}
exports.refund = refund;