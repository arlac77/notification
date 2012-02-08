
"use strict";

var fs       = require('fs')
   ,events   = require('events')
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

/**
 * Creates an instance of (Notification)Definition.
 *
 * @constructor
 * @this {Definition}
 * @param {args} object with id,severity,action,title,description and hit attribute(s).
 */
var Definition = function(args) {
    this.id          = args.id;
    this.severity    = args.severity || severity.ERROR;
    this.action      = args.action || action.ALERT;
    if(args.title) this.title = args.title;
    if(args.description) this.description = args.description;
    if(args.hint) this.hint = args.hint;
    };

/**
 * Creates an instance of (Notification)Incarnation.
 *
 * @constructor
 * @this {Incarnation}
 * @param {id} string identifying the notification.
 * @param {properties} object with additional attributes for the notification.
 */
var Incarnation = function(id,properties) {
    this.id          = id;
    this.properties  = properties;
    this.date        = new Date();
    };

var Manager = function(id,properties) {
    events.EventEmitter.call(this);
	};
	
Manager.super_ = events.EventEmitter;
Manager.prototype = Object.create(events.EventEmitter.prototype, {
	constructor: {
		value: Manager,
		enumerable: false
	}
});

Manager.prototype.handle = function(incarnation) {
	console.log("handle: " + incarnation);
    //self.emit('handle', incarnation);
}

exports.Definition          = Definition;
exports.Incarnation         = Incarnation;
exports.Manager             = Manager;
exports.severity            = severity;
exports.action              = action;
