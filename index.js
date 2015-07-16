var keyMirror = require('key-mirror');

/**
 * Takes an array of strings and returns an object ob matching keys and values;
 *
 *  @param  {Array}  an array of Strings
 *  @return {Object} an object with mirrored objects and keys
 *
 */
function toMirroredObject(keys) {
    if (!Array.isArray(keys)) {
        return; 
    }

    var mirroredObject = {};

    keys.forEach(function(key) {
        mirroredObject[key] = null;
    });

    return keyMirror(mirroredObject);
}

/**
 * Example:
 *     var toMirroredObject = require('to-mirrored-object');
 *     ...
 *     var mirroredObject = toMirroredObject(['foo', 'bar', 'bar']);
 *     log(mirroredObject) => {foo: "foo", bar: "bar", baz: "baz"};
 *
 */

module.exports = toMirroredObject;
