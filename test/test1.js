/**
 * Created by laury.lu on 2015/4/21.
 */
var ModuleSample = require('../src/scripts/modules/ModuleSample');

//console.log(ModuleSample)

var assert = require("assert");
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});

describe('Array', function() {
    describe('#customModule', function() {
        it('should return the Math calculation result',function(){

            assert.equal(3,ModuleSample.add(1,'2'));
            assert.equal(9,ModuleSample.add(4,'5'));
            assert.equal(7,ModuleSample.minus(8,'1'));
            assert.equal(-1,ModuleSample.minus('1','2'));
        })
    });
});