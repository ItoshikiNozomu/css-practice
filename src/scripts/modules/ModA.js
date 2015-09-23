'use strict'
let $ = require('jquery')
let sum = function(a,b){
	if(typeof a==='number'&&typeof b==='number'){
		return a+b
	}else{
		return null
	}
	
}

let querySomething =(sid)=>{
	return new Promise((res,rej)=>{
		return $.ajax({
			url:'http://example.com',
			
		})
	})
}

module.exports = {
	sum:sum,
	querySomething:querySomething
}