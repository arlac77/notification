
"use strict";

var fs       = require('fs')
   ,path     = require("path");


var severity = {
    "SUCCESS"   : "SUCCESS",
    "INFO"      : "INFO",
    "WARNING"   : "WARNING",
    "ERROR"     : "ERROR",
    "FATAL"     : "FATAL"
};

var notification = function(args) {

    this.id       = args.id;
    this.severity = args.severity;
    };

exports.notification        = notification;
exports.severity            = severity;
