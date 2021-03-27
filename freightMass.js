function calculateMass(arr) {
	var total = arr.reduce((acumulator, next, indice) => {
		return acumulator += arr[indice].length},0);
  return total;  
	
}
