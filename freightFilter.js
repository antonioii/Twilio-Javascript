function scanAndFilter(arr, str){
	let ans = arr.filter(function del(string){
		if (string != str) {return string}
});
	return ans;

}