
// No block scoping till es5
var message = "Hi";
{
	var message = "bye";
	console.log("inside block: "+message);
}
console.log("outside block: "+message);

// everyting was functional scoping

var msg = "Hi";
function greet(){
	var msg = "bye";
	console.log("Inside function value of msg is : "+msg)
}
greet();
console.log("Outside function value of msg is : "+msg);

// let for block scoping
let m = "Hi";
{
	let m = "Bye";
	console.log("Inside block value of m is : "+m);
}
console.log("Outside block value of m is : "+m);

// see the change once you declare let instead of var for i
var fs = [];
for(var i = 0; i < 10; i++){
	fs.push(function(){
		console.log(i);
	});
}

fs.forEach(function(f){
	f();
});