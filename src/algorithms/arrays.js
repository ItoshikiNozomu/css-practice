var quickSort = function(arr){
	
	
	var dist = function(_arr){
		var pos = 0,t = 0
		for(var i =1;i<_arr.length;i++){
			//todo
			if(i<pos&&_arr[pos]<_arr[i]){
				t = _arr[i]
				for(var j=i+1;j<=pos;i++){
					_arr[j-1] = _arr[j]
				}
				_arr[pos] = t
				pos = pos-1
			}
			if(i>pos&&_arr[pos]>_arr[i]){
				t = _arr[i]
				for(var j = i;j>=pos;j--){
					_arr[j] = _arr[j-1]
				}
				_arr[pos] = t
				pos = pos+1
			}
			//console.log(_arr)
			
		}
		//console.log(_arr,pos)
		return pos
	}
	
	var getNewArr = function(_arr){
		var pos = dist(_arr)
		
		if(_arr.length<=2){
			
			return _arr
		}else{
			return getNewArr(_arr.slice(0,pos)).concat(_arr[pos]).concat(getNewArr(_arr.slice(pos+1,_arr.length)))
		}
		
		
		
	}
	
	return getNewArr(arr)
	
}

console.log(quickSort([1,3,2,4,0,0,2,6,3,11,9,23,1]))