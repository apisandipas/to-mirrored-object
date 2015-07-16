var should = require('chai').should();
var toMirroredObject = require('../');

describe('toMirrorObject', function(){
    
    var subject;
    var arr = [
        'FEED_FISH',
        'FEED_CAT',
        'WATER_PLANTS'
    ];

    beforeEach(function() {
        subject = toMirroredObject(arr);
    });


    it('should return an object', function(){    
        subject.should.be.an('object');
    });

    it('should return the expected outcome', function(){    
        subject.should.deep.equal({
            'FEED_FISH': 'FEED_FISH',
            'FEED_CAT': 'FEED_CAT',
            'WATER_PLANTS': 'WATER_PLANTS',
        });
    });

});