'use strict'

// let $

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
			url:'http://test.com',
			
		})
		.then((d)=>{
			console.log(d)
		})
	})
}

// module.exports = function(jquery){
// 	$=jquery
// 	return {
// 		sum:sum,
// 		querySomething:querySomething
// 	}
// }
module.exports = {
	sum:sum,
	querySomething:querySomething
}