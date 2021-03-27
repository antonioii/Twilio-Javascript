function scan(arr){
	outputArr = [];
	for (var x = 0; x < arr.length; x++) {
		if (arr[x] == 'contraband') {outputArr.push(x)}
	}

	return outputArr;
}