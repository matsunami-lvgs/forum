"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 5000;
app.get("/", function (req, res) {
    res.send("hogehoge");
});
app.listen(port, function () {
    console.log("Listening port 5000");
});
