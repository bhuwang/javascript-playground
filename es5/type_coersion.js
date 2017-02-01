var a = "123";
var b = 5;

console.log(a+b);
console.log(b+a);

a = "1";
b = 1.0;
c = "1.0";

console.log('==============');
console.log(a==b);
console.log(b==c);
console.log(a==c);

console.log('==============');
console.log(a===b);
console.log(b===c);
console.log(a===c);

console.log('==============');
var a = 10;
if(a){
	console.log("positive value is true");
}
a = -10;
if(a){
	console.log("negative value is true");
}

a = "abc";
if(a){
	console.log("String value is true");
}

a = 0;
if(!a){
	console.log("0 is false");
}

a = "";
if(!a){
	console.log("Blank string is false");
}

a = undefined;
if(!a){
	console.log("undefined is false");
}

a = null;
if(!a){
	console.log("null is false");
}