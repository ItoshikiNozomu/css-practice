'use strict'
/*
node = {
	val:1,
	left:node,
	right:node
}
*/
var walkBinTreeAllPaths = function(tRoot){
	var paths = []
	var dive = function(node,path){
		path.push(node)
		if(!node.left&&!node.right){
			
			paths.push(path)
		}else{
			
			dive(node.left,[].concat(path))
			dive(node.right,[].concat(path))
		}
	}
	 dive(tRoot,[])
	 return paths
}


var l3n1 = {num:1}
var l3n2 = {num:2}
var l3n3 = {num:3}
var l3n4 = {num:4}
var l2n1 = {num:5,left:l3n1,right:l3n2}
var l2n2 = {num:6,left:l3n3,right:l3n4}
var l1n1 = {num:7,left:l2n1,right:l2n2}


console.log(walkBinTreeAllPaths(l1n1))
//node.left.value<node.value   
//node.right.value>node.value

class BstNode{
	
	
	constructor(value){
		this.val = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree{
	
	
	constructor(value){
		if(value){
			this.root = new BstNode(value)
		}else{
			this.root = null
		}
	}
	insert(value) {
		var insertNode = function(target,newNode){
			if(target.value>newNode.value){
				if(target.left){
					
				}else{
					
				}
			}else if(target.value===newNode.value){
				
			}else{
				
			}
		}
		var node = new BstNode(value)
		if (!this.root) {
			this.root = node
		} else {
			insertNode(this.root,node)
		}


	}
	search(value){}
	inOrderTraverse(){}
	preOrderTraverse(){}
	postOrderTraverse(){}
	min(){}
	max(){}
	remove(){}
	
}
  
