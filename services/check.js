"use strict";

var request = require("request");
var Promise = require("promise");
var config = require("../config");




function check_search(id, type, text) {
    var url = config.apiRoot + "1/events/" + id + "/attendees/search?max_result_count=12&skip_count=0&has_voided=false&search_type=" + type + "&search_text=" + text;
    console.log("GET", url);
    return new Promise(function (resolve, reject) {
        request.get({
            url: url,
            headers: {
                'Authorization': "Bearer znLpKOE7yGaO9DHZ9opdHuVUTRBqIDo8wELReGjoJxF71kK27bCABwHCIXUSC7bZk7E-t8wApLZ_Ixki_WrAlMdAVOEHjZ9z7sYp06MfO_IWe_NK31P2LFEMqwwCfPQys5JP_TA1Kqq6dSE7JNevxuzJvKNqfrPCXPZaGq-IObDGOTgR9VR_6E_s_Te2ROJirtCd1uiBtYQG-SE3Xw7spHDnmEhoWI6ZPKCb6sAjJiWe6bdg05m_dbv0T54bDQu-PTj8zstbBsr_wUWXRjhWfz3oLj_a8VsrfxkCNzpDSJJEUXVkM1AeeTsdCah0D2-ri05FvMcF34wL4QlGiSK2am1a8DoVDjRnZK1Z4248A9f0FfeeSapOmlf96cccu0F_OpvBJg"
            }
        },
            function (err, httpResponse, body) {
                var result = JSON.parse(body);
                if (err) reject(err);
                else {
                    if (result.success) {
                        console.log('there are ' + result.result.total_count + " can be check");
                        resolve(body);
                    }

                }
            });
    })
}
exports.check_search = check_search;



function checkin(id, barcode) {
    var url = config.apiRoot + "1/events/" + id + "/attendees/" + barcode + "/checkin";
    console.log("PUT", url);
    return new Promise(function (resolve, reject) {
        request.put({
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
                        resolve(res);
                    } else {
                        console.log(body.error.message);
                    }

                }
            });
    })
}
exports.checkin = checkin;