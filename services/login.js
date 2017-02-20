"use strict";

var request = require("request");
var Promise = require("promise");


function login(model) {
    var url = "https://identity.sparxo.com/oauth2/access_token";
    console.log("POST", url);
    return new Promise(function (resolve, reject) {
        request.post({
            url: url,
            headers: {
                'Authorization': 'Basic MTo4ODA4YWM4MS1kZDFkLTQ2MmQtODIwMi00NWZjZmY4N2U2YTA='
            },
            form: model
        },
            function (err, httpResponse, body) {
                if (err) reject(err);
                else {
                    console.log('login success!');
                    resolve(body);
                }
            });
    })
}
exports.login = login;