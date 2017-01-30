var VALUE = 'Hello World';
VALUE = "Welcome to the world";

console.log('value: '+VALUE);


const INTEREST_RATE = 20;
INTEREST_RATE = 21.5;

console.log('Interest Rate: '+VALUE);

// like let const is also a block scope

{
	const newValue = 20;
}
console.log('new value: '+ newValue);