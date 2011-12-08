
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

var Definition = function(args) {
    this.id          = args.id;
    this.severity    = args.severity || severity.ERROR;
    this.action      = args.action || action.ALERT;
    if(args.title) this.title = args.title;
    if(args.description) this.description = args.description;
    if(args.hint) this.hint = args.hint;
    };

var Incarnation = function(id,properties) {
    this.id          = id;
    this.properties  = properties;
    this.date        = new Date();
    };

exports.Definition          = Definition;
exports.Incarnation         = Incarnation;
exports.severity            = severity;
exports.action              = action;
