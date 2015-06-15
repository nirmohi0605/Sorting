function bubbleSort(array) {
	var N = array.length;
	for (var i = 0; i< N; i++){
		for (var j = 0; j < N - 1; j++){
			num1 = array[j]
			num2 = array[j+1]
			if (num1 > num2){
				array[j+1] = num1;
				array[j] = num2;
			}
		}
	}
	return array;
}


function mergeSort(array) {
	var middle = Math.ceil(array.length/2);
	var left = [];
	var right = [];

	if(array.length <= 1){
		return array;
	}
	debugger;

	for(i = 0 ; i < array.length; i++){
		if(i < middle)
			left.push(array[i]);
		else
			right.push(array[i]);
	}

	left = mergeSort(left);
	right = mergeSort(right);


    var toReturn = merge(left,right);

    return toReturn;

}

function merge(left, right){
console.log("left array:", left, "right array: ", right);
	var result = [];

	while(left.length > 0 && right.length > 0){

		if(left[0] < right[0]){
			result.push(left[0]);
			left.shift();
		}
		else {
			result.push(right[0]);
			right.shift();
		}
	}

if(left.length > 0){
	for (var i in left){
	result.push(left[i]);
}
}

if(right.length > 0){
	for (var i in right){
	result.push(right[i]);
}
}

return result;

}

//mergeSort([3,1,4,9,2,5]) ;