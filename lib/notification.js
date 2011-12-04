
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
    "PANIC"    : "PANIC",
    "ABORT"    : "ABORT",
    "RETRY"    : "RETRY",
    "FALLOVER" : "FALLOVER",
    "ALERT"    : "ALERT",
    "MANUAL_INTERVENTION" : "MANUAL_INTERVENTION",
    "IGNORE"   : "IGNORE"
};

var definition = function(args) {
    this.id          = args.id;
    this.severity    = args.severity;
    this.action      = args.action;
    this.title       = args.title;
    this.description = args.description;
    this.hint        = args.hint;
    };

var incarnation = function(id,properties) {
    this.id          = id;
    this.properties  = properties;
    };

exports.definition          = definition;
exports.incarnation         = incarnation;
exports.severity            = severity;
exports.action              = action;
