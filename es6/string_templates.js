var saluation = "Hello";
var greeting  = saluation + ", world";

// es6 way
// we have to use tick instead of quote
// supports multiple line
var greeting2 = `${saluation}, world`;


var greeting3 = `Hey

${saluation}, world

how 

do 

you do`;

console.log(greeting);
console.log(greeting2);
console.log(greeting3);

var x = 1;
var y = 2;

var equation = `${x}+${y}=${x+y}`;
console.log(equation);

// parsing strings and values
function tag(strings, ...values){
	values[1] = 'sleepy';
	if(values[0]<22 && values[0]>7){
		values[1] = 'awake';
	}
	return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message);