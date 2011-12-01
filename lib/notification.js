
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

var action = {
    "CONTINUE" : "CONTINUE",
    "PANIC" : "PANIC",
    "ABORT" : "ABORT",
    "RETRY" : "RETRY",
    "FALLOVER" : "FALLOVER",
    "ALERT" : "ALERT",
    "MANUAL_INTERVENTION" : "MANUAL_INTERVENTION",
    "IGNORE" : "IGNORE"
};

var notification = function(args) {

    this.id       = args.id;
    this.severity = args.severity;
    this.action   = args.action;
    };

exports.notification        = notification;
exports.severity            = severity;
exports.action              = action;
