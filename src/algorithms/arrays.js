'use strict'
let quickSort = function(arr){
	
	let dist = (l,r)=>{
		
		
		let pivot = arr[Math.floor((r+l)/2)],t = 0
		let i=l,j=r
		while(i<=j){
			console.log(i,j)
			while(arr[i]<pivot){
				i = i+1
			}
			while(arr[j]>pivot){
				j = j-1
			}
			if(i<=j){
				t = arr[i]
				arr[i] = arr[j]
				arr[j] = t
				i = i+1 
				j = j-1
			}
		}
		return i
	}
	
	let recrSort = (l,r)=>{
		if(r-l>1){
			let index = dist(l,r)
			if(l<index-1)
				recrSort(l,index-1)
			if(index<r)
				recrSort(index,r)
			
		}
	}
	recrSort(0,arr.length-1)
	return arr
}

console.log(quickSort([1,3,2,4,0,0,2,6,3,11,9,23,1]))