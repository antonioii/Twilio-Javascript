/*
Getting all parameters sent to a unlimited parameters function and returning them printed.
Example:
*/

function imReceivingManyPmt(parameters) {
	let variables = Object.values(arguments);
	return console.log(variables)
}

