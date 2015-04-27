/**
 * Created by laury.lu on 2015/4/21.
 */
var ModuleSample = require('../src/scripts/modules/ModuleSample');
var sinon = require('sinon');
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

describe('Custom functions', function() {
    describe('#customModule', function() {
        it('should return the Math calculation result',function(){

            assert.equal(3,ModuleSample.add(1,'2'));
            assert.equal(9,ModuleSample.add(4,'5'));
            assert.equal(7,ModuleSample.minus(8,'1'));
            assert.equal(-1,ModuleSample.minus('1','2'));
        })
    });
});
/*
describe('async functions',function(){
    describe('#async function',function(){
        it('callback should evaluate 1 as data',function(done){
             ModuleSample.doAsync(function(data){
                assert.equal(1,data);
                done();
            })
        })
        it('callback should resolve 1 as data',function(){
            return ModuleSample.doPromise().then(function(data){
                assert.equal(1,data);
                //done();
            })
        })

    })
})
*/
describe('we use sinon for some function statistics',function(){
    describe('#spy utils',function(){
        it('spy on functions calls',function(){
            function fn(){};
            var spy = sinon.spy(fn);
            fn();
            assert(true,spy.called);
            assert(true,spy.calledOnce);
        });

        it('record the method call count',function(){
            var obj = {};
            obj.fn = function(){};
            var spy = sinon.spy(obj,'fn');

            obj.fn();

            assert.equal(1,spy.callCount);
            assert.equal(1,obj.fn.callCount);


        })

    })
})