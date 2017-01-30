//Hoisting effect

function foo(){
	console.log("foo defined");
}

foo();

function foo(){
	console.log("foo re-defined");
}

foo();

// the other way round

var zoo = function(){
	console.log("zoo defined");
}

zoo();

var zoo = function(){
	console.log("zoo re-defined");
}

zoo();