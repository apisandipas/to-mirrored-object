## to-mirrored-object

I often see this when people are writing constants for a Flux setup.
    
    var keyMirror = require('key-mirror');

    module.exports = keyMirror({
        USER_SIGNUP:  null
        USER_SIGNOUT: null
    });

`toMirroredObject` saves you from having to type `null` values.
The obvious trade off being that you have to quote the array keys. 
It still two less keystrokes per item.
 
    var toMirroredObject = require('to-mirrored-object');

    module.exports = toMirroredObject([
        'USER_SIGNUP',
        'USER_SIGNOUT' 
    ]);

    => {USER_SIGNUP: "USER_SIGNUP", 'USER_SIGNOUT: "'USER_SIGNOUT"};
  