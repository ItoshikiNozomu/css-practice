'use strict'
//let Mocha = require('mocha')
let assert = require('assert')
let Sinon = require('sinon')
let testMod = require('../../scripts/modules/ModA')

let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
let should = chai.should()
 
chai.use(chaiAsPromised);



describe('sum',function(){
	it('返回两参数之和',function(){
		assert.equal(2,testMod.sum(1,1))
		assert.equal(.5,testMod.sum(.1,.4))
		assert.equal(1,testMod.sum(-2,3))
	})
	it('不进行类型转换，有错误类型传入时返回null',()=>{
		assert.equal(null,testMod.sum(1))
		assert.equal(null,testMod.sum(1,'2'))
	})
	
})





describe('some ajax functions',()=>{
	let server = Sinon.fakeServer.create()
	
	before(()=>{
		
	})
	after(()=>{
		
	})
	
	
	it('should return the correct description',()=>{
		//console.log(testMod.querySomething('a'))
		// testMod.querySomething('a').then(function(data){
		// 	assert.equal(data,'a is good')
		// 	done()
		// })
		//return Promise.resolve(2 + 2).should.eventually.equal(4);
		//return Promise.resolve(2).should.eventually.equal(2)
		return testMod.querySomething('a').should.eventually.equal('a is good')
	})
})