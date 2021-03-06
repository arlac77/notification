var vows = require('vows'),
    assert = require('assert'),
    notification  = require('../lib/notification');

vows.describe('Notification Definition').addBatch({
    'Definition Attributes': {
        topic: notification.Definition(
            { "id" : "de.mfelten.test.1",
              "severity" : notification.severity.SUCCESS,
              "action" : notification.action.IGNORE,
              "title" : "a simple notification",
              "description" : "some more text",
              "hint" : "ignore anything here" }),

        'id is present': function (topic) {
            assert.equal (topic.id, "de.mfelten.test.1");
        },
        'severity is present': function (topic) {
            assert.equal (topic.severity, notification.severity.SUCCESS);
        },
        'action is present': function (topic) {
            assert.equal (topic.action, notification.action.IGNORE);
        },
        'title is present': function (topic) {
            assert.equal (topic.title, "a simple notification");
        },
        'description is present': function (topic) {
            assert.equal (topic.description, "some more text");
        },
        'hint is present': function (topic) {
            assert.equal (topic.hint, "ignore anything here");
        }
    },
    'Definition Default Attributes': {
        topic: notification.Definition(
            { "id" : "de.mfelten.test.2" }),

        'id is present': function (topic) {
            assert.equal (topic.id, "de.mfelten.test.2");
        },
        'severity is present': function (topic) {
            assert.equal (topic.severity, notification.severity.ERROR);
        },
        'action is present': function (topic) {
            assert.equal (topic.action, notification.action.ALERT);
        },
        'title is undefined': function (topic) {
            assert.isUndefined(topic.title);
        },
        'description is undefined': function (topic) {
            assert.isUndefined(topic.description);
        },
        'hint is undefined': function (topic) {
            assert.isUndefined(topic.hint);
        }
    },
}).export(module);

vows.describe('Notification Incarnation').addBatch({
    'Incarnation Attributes': {
        topic:  new notification.Incarnation("de.mfelten.test.1",{ "key1" : "value1", "key2" : "value2"}),
        'id is present': function (topic) {
            assert.equal (topic.id, "de.mfelten.test.1");
        },
        'date <=> now': function (topic) {
            var now = new Date();
            assert.ok(topic.date.getTime() <= now.getTime() && (topic.date.getTime() + 1000 ) >= now.getTime());
        },
        'properties are present': function (topic) {
            assert.equal (topic.properties.key1, "value1");
            assert.equal (topic.properties.key2, "value2");
        }
    }
}).export(module);

vows.describe('Notification Manager').addBatch({
    'Incarnation Attributes': {
        topic:  function() { var manager = new notification.Manager(); return manager; },
        'handle notification': function (topic) {
			var handeled = 0;
			
			topic.on('handle', function(incarnation) {
				console.log("handle: " + incarnation);
				
	            assert.equal (incarnation.id, "de.mfelten.test.2");
				handeled = 1;
			});

			var incarnation = new notification.Incarnation("de.mfelten.test.1",{ "key1" : "value1", "key2" : "value2"});
			topic.handle(incarnation);
			
           // assert.equal (handeled, 1);
        }
    }
}).export(module);
