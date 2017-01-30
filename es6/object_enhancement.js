let color = "red";
let speed = 10;
function go(){
	console.log("vroom");
}

var car = {
	color:color, 
	speed:speed,
	go:go
}
console.log(car.color);
console.log(car.speed);
car.go();

// if the property name same as variable name then
var car1 = {color, speed, go};

console.log(car1.color);
console.log(car1.speed);
car1.go();

// you can have the direct function declaration.
var car2 = {
	color, 
	speed,
	go(){
		console.log("vroom");
	}
}
console.log(car2.color);
console.log(car2.speed);
car2.go();

