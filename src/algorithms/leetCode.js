'use strict'
//https://leetcode.com/problems/nim-game/
//自己先拿，每次拿1到3个，拿到最后一个的为胜利
var canWinNim = (n)=>{
	return n%4>0
}

//https://leetcode.com/problems/add-digits/
 var addDigits = (num)=>{
	while((num+'').length>1){
		num = (num+'').split('').reduce((reduced,val,idx)=>{return parseInt(val)+reduced},0)
	}
	return num
}

//https://leetcode.com/problems/happy-number/  

 var isHappy = (num)=>{
	
	var rets = []
	var getRet = (a)=>{
		
		return (a+'').split('').reduce((reduced,val,idx)=>{return Math.pow(parseInt(val),2)+reduced},0)
	}
	var ret =num
	while(ret!=1&&!rets.some((e)=>{return e==ret})){
		rets.push(ret)
		ret = getRet(ret)
		
		console.log(ret)
	}
	return ret==1
}

//https://leetcode.com/problems/ugly-number/
//todo
 var isUgly =(num)=>{
	if(num==0)return false
	if(num==1)return true
	var baseFactors = [2,3,5]
	//var rets = []
	while(num!=1){
		// for(var f of baseFactors){
		// 	var ret = num/f
		// 	if(Number.isInteger(ret)){
		// 		//rets.push(ret)
		// 		num = ret
		// 		break
		// 	}
		// }
		
		for(var i=0;i<baseFactors.length;i++){
			var ret = num/baseFactors[i]
			if(Number.isInteger(ret)){
				num = ret
				break
			}else if(i<baseFactors.length-1){
				continue
			}
			return false
			
		}
		
	}
	
	return true
	
}

//https://leetcode.com/problems/count-primes/
 var countPrimes=(n)=>{
	
}



//https://leetcode.com/problems/min-stack/
/**
 * @constructor
 */
 var MinStack = function() {
    this._st = []
	this._orderedLL = new OrderedLinkedList()
	
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this._st .push(x)
	this._orderedLL.add(x)
};

/**
 * @returns {number}
 */
MinStack.prototype.pop = function() {
    var x = this.top()
	this._st.pop()
	this._orderedLL.remove(x)
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this._st[this._st.length-1]
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  	return this._orderedLL.getFirst().val
};

class OrderedLinkedList{
	constructor(){
		this._first = null
	}
	add(x){
		if(!this._first){
			this._first = {
				val:x,
				next:null
			}
		}else{
			var mNode = this._first
			while(true){
				if(x<mNode.val){
					this._first = {
						val:x,next:mNode
					}
					break
				}else{
					if(mNode.next){
						if(x<mNode.next.val){
							mNode.next = {
								val:x,
								next:mNode.next
							}
							break
						}else{
							mNode = mNode.next
						}
					}else{
						mNode.next = {
							val:x,next:null
						}
						break
					}
				}
			}
		}
	}
	remove(x){
		var mNode = this._first,prev = null
		if(!mNode)return undefined
		while(mNode){
			if(x==mNode.val){
				if(prev==null){
					this._first = mNode.next
				}else{
					prev.next = mNode.next
				}
				break
			}else{
				prev = mNode
				mNode = mNode.next
			}
		}
	}
	getFirst(){
		return this._first
	}
}


var maxDepth = (root)=>{
	if(!root)return 0
	var depth = 0
	
	var dive = function(path,cb){
		
		var mNode = path[path.length-1]
		if(!mNode){
			cb(path)
			return	
		}
		if(!mNode.left&&!mNode.right){
			cb(path)
		}else{
			
			if(mNode.left){
				var mArr1 = Array.from(path)
				mArr1.push(mNode.left)
				dive(mArr1,cb)
			}
			if(mNode.right){
				var mArr2 = Array.from(path)
				mArr2.push(mNode.left)
				dive(mArr2,cb)
			}
		}
	}
	
	dive([root],function(path){
		if(path.length>depth){
			depth = path.length
		}
	})
	return depth
}


if (module.export) {
	module.export = {
		canWinNim: canWinNim,
		addDigits: addDigits,
		isHappy: isHappy,
		isUgly: isUgly,
		MinStack: MinStack
	}
}
