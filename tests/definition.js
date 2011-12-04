var vows = require('vows'),
    assert = require('assert'),
    notification  = require('../lib/notification');

vows.describe('Notification Definition').addBatch({
    'Definition Attributes': {
        topic:  new notification.definition(
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
        }
    }
}).export(module);

vows.describe('Notification Incarnation').addBatch({
    'Incarnation Attributes': {
        topic:  new notification.incarnation("de.mfelten.test.1",{ "key1" : "value1", "key2" : "value2"}),
        'id is present': function (topic) {
            assert.equal (topic.id, "de.mfelten.test.1");
        },
        'properties are present': function (topic) {
            assert.equal (topic.properties.key1, "value1");
            assert.equal (topic.properties.key2, "value2");
        }
    }
}).export(module);
