
"use strict";

var fs       = require('fs')
   ,path     = require("path");

var notification = function(args) {

    this.id = args.id;

    };

exports.notification            = notification;
