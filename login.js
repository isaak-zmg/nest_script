"use strict";

var Login = require("./services/login");

var login_info = {
    username : "zmg@qq.com",
    password: "zmg288521",
    grant_type: "password"
}

Login.login(login_info).then(function(res) {
    console.log(JSON.parse(res));
})