'use strict'
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
global.XMLHttpRequest = XMLHttpRequest
let sinon = require('sinon')
let xhr = new XMLHttpRequest()
sinon.xhr.XMLHttpRequest = XMLHttpRequest

let server = sinon.fakeServer.create({
	
})

server.respondWith('http://baidu.com', function (xhr) {
	console.log(xhr)
				xhr.respond(200, { "Content-Type": "application/json" },
		'[{ "id": 12, "comment": "Hey there" }]');
})


xhr.onload=function(evt){
	console.log(evt)
	console.log(xhr)
}
xhr.open('get','http://baidu.com')
// xhr.open('get','http://test.com/rest/books')
xhr.send(null)
server.respond()