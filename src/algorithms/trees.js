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
		this.value = value
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
		var _this = this
		var insertNode = function(target,newNode){
			if(target.value>=newNode.value){
				if(target.left){
					insertNode(target.left,newNode)
				}else{
					target.left = newNode
					
				}
			}else{
				if(target.right){
					insertNode(target.right,newNode)
				}else{
					target.right = newNode
				}
			}
		}
		var node = new BstNode(value)
		if (!_this.root) {
			_this.root = node
		} else {
			insertNode(_this.root,node)
		}


	}
	search(value){}
	inOrderTraverse(cb){
		
	}
	preOrderTraverse(){}
	postOrderTraverse(){}
	min(){}
	max(){}
	remove(){}
	
}
  

var mBst = new BinarySearchTree(10)
for(var i = 5;i<15;i++){
	mBst.insert(i)
}
console.log(mBst)


class Graph{
	
	constructor(){
		this.vertices = []
		this.neighbours = {}
		
	}
	addVertex(v){
		this.vertices.push(v)
		this.neighbours[v] = []
	}
	addEdge(vertex,neighbour){
		//this.vertices.push(vertex)
		this.neighbours[vertex].push(neighbour)
		this.neighbours[neighbour].push(vertex)
	}
	
	toString(){
		var str = ''
		for(let v of this.vertices){
			let nList = this.neighbours[v]
			str+=v+'->'+nList.join(',')+'\n'
		}
		return str
	}
	
	bfs(vertex,cb){
		const WHITE = 'white'
		const GREY = 'grey'
		const BLACK = 'black'
		let mQueue = []
		let colors = {}
		let distances = {}
		//前溯点
		let preds = {}
		for(let v of this.vertices){
			colors[v] = WHITE
			distances[v ]= 0
			preds[v] = null
		}
		
		
		mQueue.push(vertex)
		
		while(mQueue.length>0){
			console.log(mQueue)
			//observer
			let mVertex = mQueue.shift()
			let neighbours = this.neighbours[mVertex]
			
			colors[mVertex] = GREY
		
			//explore
			
			for(let v of neighbours){
				if(colors[v]==WHITE&&!mQueue.some((ele)=>{return ele==v})){
					mQueue.push(v)
					distances[v] = distances[mVertex]+1
					preds[v] = mVertex
				}
				
			}
			colors[mVertex] = BLACK
			if(cb)
				cb(mVertex)
		}
		return {
			distances:distances,
			preds:preds
		}
	}
	
	dfs(){}
	
	getShortestPath(fr,to){
		let pathInfo = this.bfs(fr)
		let path = []
		let mVert = to
		while(mVert!=null){
			path.push(mVert)
			mVert = pathInfo.preds[mVert]
		}
		return path.reverse()
		
	}
}

let mGraph = new Graph()

var mVerts = ['a','b','c','d','e','f','g','h','i']


for(let v of mVerts){
	mGraph.addVertex(v)
}
mGraph.addEdge('a','b')
mGraph.addEdge('a','c')
mGraph.addEdge('a','d')
mGraph.addEdge('c','d')
mGraph.addEdge('c','g')
mGraph.addEdge('d','g')
mGraph.addEdge('d','h')
mGraph.addEdge('b','e')
mGraph.addEdge('b','f')
mGraph.addEdge('e','i')



console.log(mGraph.toString())

console.log(mGraph.bfs('a',(v)=>{console.log(v+',')}))


console.log(mGraph.getShortestPath('a','i'))

