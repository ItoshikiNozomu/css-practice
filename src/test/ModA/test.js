'use strict'
//let Mocha = require('mocha')

//var domino = require('domino');
let jsdom = require('jsdom').jsdom
let $ = require('jquery')(jsdom('').defaultView)
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
$.support.cors = true; // cross domain
$.ajaxSettings.xhr = function () { return new XMLHttpRequest(); };
global.$ = $;

$.mockjax = require('jquery-mockjax')

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
	
})