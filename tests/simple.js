var vows = require('vows'),
    assert = require('assert'),
    notification  = require('../lib/notification');

vows.describe('Attribute').addBatch({
    'Attribute Values': {
        topic:  new notification.notification({ "id" : "de.mfelten.test.1",
        "severity" : notification.severity.SUCCESS,
        "action" : notification.action.IGNORE }),

        'id is present': function (topic) {
            assert.equal (topic.id, "de.mfelten.test.1");
        },
        'severity is present': function (topic) {
            assert.equal (topic.severity, notification.severity.SUCCESS);
        },
        'action is present': function (topic) {
            assert.equal (topic.action, notification.action.IGNORE);
        }
    }
}).export(module);
