var greet = function(user){
	return "Hello "+ user;
};

//console.log(greet("Bhuwan"));

// converting to arrow function

arrow = (user)=>{
	return "Arrow Hello " + user;
};

//console.log(arrow("Bhuwan"));

// lets concise the arrowGreet function

arrow = user => {
	return "Consice arrow hello " + user;
}
console.log(arrow("Bhuwan"));

// you must have to use bracket in case of more than 1 argument.
// for single argument you can just ommit the parenthesis.
arrow = (user, message) => {
	return message + ' ' + user;
}
console.log(arrow("Bhuwan","Hi"));

