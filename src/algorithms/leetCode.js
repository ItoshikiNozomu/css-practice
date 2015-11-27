'use strict'
//https://leetcode.com/problems/nim-game/
//自己先拿，每次拿1到3个，拿到最后一个的为胜利
var canWinNim = (n) => {
	return n % 4 > 0
}

//https://leetcode.com/problems/add-digits/
var addDigits = (num) => {
	while ((num + '').length > 1) {
		num = (num + '').split('').reduce((reduced, val, idx) => { return parseInt(val) + reduced }, 0)
	}
	return num
}

//https://leetcode.com/problems/happy-number/  

var isHappy = (num) => {

	var rets = []
	var getRet = (a) => {

		return (a + '').split('').reduce((reduced, val, idx) => { return Math.pow(parseInt(val), 2) + reduced }, 0)
	}
	var ret = num
	while (ret != 1 && !rets.some((e) => { return e == ret })) {
		rets.push(ret)
		ret = getRet(ret)

		console.log(ret)
	}
	return ret == 1
}

//https://leetcode.com/problems/ugly-number/
//todo
var isUgly = (num) => {
	if (num == 0) return false
	if (num == 1) return true
	var baseFactors = [2, 3, 5]
	//var rets = []
	while (num != 1) {
		// for(var f of baseFactors){
		// 	var ret = num/f
		// 	if(Number.isInteger(ret)){
		// 		//rets.push(ret)
		// 		num = ret
		// 		break
		// 	}
		// }
		
		for (var i = 0; i < baseFactors.length; i++) {
			var ret = num / baseFactors[i]
			if (Number.isInteger(ret)) {
				num = ret
				break
			} else if (i < baseFactors.length - 1) {
				continue
			}
			return false

		}

	}

	return true

}

//https://leetcode.com/problems/count-primes/
var countPrimes = (n) => {

}



//https://leetcode.com/problems/min-stack/
/**
 * @constructor
 */
var MinStack = function () {
    this._st = []
	this._orderedLL = new OrderedLinkedList()

};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function (x) {
    this._st.push(x)
	this._orderedLL.add(x)
};

/**
 * @returns {number}
 */
MinStack.prototype.pop = function () {
    var x = this.top()
	this._st.pop()
	this._orderedLL.remove(x)
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function () {
    return this._st[this._st.length - 1]
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function () {
	return this._orderedLL.getFirst().val
};

class OrderedLinkedList {
	constructor() {
		this._first = null
	}
	add(x) {
		if (!this._first) {
			this._first = {
				val: x,
				next: null
			}
		} else {
			var mNode = this._first
			while (true) {
				if (x < mNode.val) {
					this._first = {
						val: x, next: mNode
					}
					break
				} else {
					if (mNode.next) {
						if (x < mNode.next.val) {
							mNode.next = {
								val: x,
								next: mNode.next
							}
							break
						} else {
							mNode = mNode.next
						}
					} else {
						mNode.next = {
							val: x, next: null
						}
						break
					}
				}
			}
		}
	}
	remove(x) {
		var mNode = this._first, prev = null
		if (!mNode) return undefined
		while (mNode) {
			if (x == mNode.val) {
				if (prev == null) {
					this._first = mNode.next
				} else {
					prev.next = mNode.next
				}
				break
			} else {
				prev = mNode
				mNode = mNode.next
			}
		}
	}
	getFirst() {
		return this._first
	}
}

//https://leetcode.com/problems/maximum-depth-of-binary-tree/
var maxDepth = (root) => {
	if (!root) return 0

	var depth = 0
	var dive = function (mNode, cb, level) {
		if (mNode != null) {

			dive(mNode.left, cb, level + 1)
			dive(mNode.right, cb, level + 1)
			if (!mNode.left && !mNode.right) {
				cb(level)
			}
		}
	}

	dive(root, (level) => {
		if (depth < level) depth = level
	}, 1)
	return depth
}

maxDepth({ val: 0 })


//https://leetcode.com/problems/balanced-binary-tree/
//todo
var isBalanced = function (root) {
	var isBalanced = true
	var test = function (mNode) {
		var leftDepth = maxDepth(mNode.left)
		var rightDepth = maxDepth(mNode.right)
		//console.log(Math.abs(leftDepth-rightDepth)<=1)
		return Math.abs(leftDepth - rightDepth) <= 1
	}
	var dive = function (mNode, cb) {
		if (mNode && isBalanced) {
			dive(mNode.left, cb)
			dive(mNode.right, cb)
			cb(mNode)
		}
	}
	dive(root, (mNode) => {
		if (isBalanced) {
			isBalanced = test(mNode)
		}

		console.log(isBalanced)
	})
	return isBalanced
}
//https://leetcode.com/problems/path-sum/
var hasPathSum = (root, sum) => {
	if (!root) return false
	var mSum = undefined


	var dive = (node, pathSum, cb) => {
		if (mSum != sum && node) {
			dive(node.left, pathSum + node.val, cb)
			dive(node.right, pathSum + node.val, cb)
			if (!node.left && !node.right) {
				cb(pathSum + node.val)
			}
		}
	}
	dive(root, 0, (pathSum) => {
		if (mSum != sum) {
			mSum = pathSum
		}
	})
	return mSum == sum
}

//https://leetcode.com/problems/path-sum-ii/
var pathSum1 = function (root, sum) {
	var paths = []
	var dive = (path, pSum, node, cb) => {
		if (node) {
			path.push(node.val)
			var leftPath = Array.from(path)
			var rightPath = Array.from(path)
			pSum = pSum + node.val
			dive(leftPath, pSum, node.left, cb)
			dive(rightPath, pSum, node.right, cb)

			if (!node.left && !node.right) {
				cb(pSum, path)
			}
		}
	}

	dive([], 0, root, (pSum, mPath) => {
		if (pSum == sum) {
			paths.push(mPath)
		}
	})
	return paths
}


var pathSum = function(root,sum){
	var paths = [],leaves = []
	var dive = (pSum,node,cb)=>{
		if(node){
			pSum = pSum+node.val
			
			dive(pSum,node.left,cb)
			dive(pSum,node.right,cb)
			
			if(node.left){
				node.left._f = node
			}
			if(node.right){
				node.right._f = node
			}
			//console.log(node)
			if(!node.left&&!node.right&&pSum==sum){
				leaves.push(node)
				
			}
		}
	}
	
	var getPath = (leaf)=>{
		var arr = [leaf.val]
		var node = leaf
		
		while(node._f){
			arr.push(node._f.val)
			node = node._f
		}
		return arr.reverse()
	}
	
	dive(0,root,(mSum,mNode)=>{
		
	})
	
	paths = leaves.map((node)=>getPath(node))
	
	//console.log(root)
	
	return paths
}

//https://leetcode.com/problems/invert-binary-tree/
var invertTree = (root)=>{
	var dive = function(node){
		if(node){
			var t = node.left
			node.left = node.right
			node.right = t
			dive(node.left)
			dive(node.right)
		}
	}
	dive(root)
	return root
}

var mRt = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 3,
			left: {
				val: 4
			}
		},
		right: { val: 7 }
	},
	right: {
		val: 2,
		right: {
			val: 3,
			right: {
				val: 4
			}
		}
	}
}
console.log(hasPathSum({ val: 1 }, 0))

console.log(pathSum(mRt, 10))


// if (module.export) {
// 	module.export = {
// 		canWinNim: canWinNim,
// 		addDigits: addDigits,
// 		isHappy: isHappy,
// 		isUgly: isUgly,
// 		MinStack: MinStack
// 	}
// }
