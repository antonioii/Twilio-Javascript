function getFirstAmountSorted(inputArray, numberOfItems) {
	inputArray.sort();
	let ans = [];
	let k = 0; //a simple counter
	for (var x = numberOfItems; x > 0; x--) {		
		ans.push(inputArray[k])
		k++;
		}
	return ans;
}