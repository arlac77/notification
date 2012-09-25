
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

var _Definition = Object.create({},
	{
		action : {
			value : action.ALERT,
			enumerable : false
		},
		severity : {
			value : severity.ERROR,
			enumerable : false
		}
	});
	

/**
 * Creates an instance of (Notification)Definition.
 *
 * @constructor
 * @this {Definition}
 * @param {args} object with id,severity,action,title,description and hit attribute(s).
 */
var Definition = function(args) {
	var props = { };

	for(var k in {'id' : 1, 'severity' : 1,'action' : 1,'title' : 1 ,'description' : 1,'hint' :1 }) {
		if(args[k])
			props[k] = { value: args[k] };
	}

	return Object.create(_Definition, props);
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
