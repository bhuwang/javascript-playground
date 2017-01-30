//#1
var obj = {
	color: "blue"
}

console.log(obj.color);

//#2
var {color, position} = {
	color: "red",
	name: "Bhuwan",
	state: "NY",
	position:"Forward"
}
console.log(color);
console.log(position);

//#3
function generateObj(){
	return{
		color: "red",
		name: "Bhuwan",
		state: "NY",
		position:"Forward"
	}
}

var {name, state} = generateObj();
console.log(name);
console.log(state);

//#4: if you want different name
var {name:firstName, state:location} = generateObj();
console.log(firstName);
console.log(location);

//#5
// if you only care first and fifth, you can do the following
var [first,,,,fifth] = ["red","yellow","green","black","orange"];
console.log(first);
console.log(fifth);