function calculatePower(arr){
	let first = arr.map(function multi(num){
		return num*2});

	let second = first.reduce((acumulator, next) => {
		return acumulator += next},0);

	return second;

}