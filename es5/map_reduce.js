var numbers = [1,3,4,6,8,9,12,16];
var result = numbers.filter(num=>num%2!=0)
	.map(num=>num*2)
	.reduce((num1, num2) => num1+num2, 0);
console.log(result);
