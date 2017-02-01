// rest parameters (spread operator) vs arguments keyword

let sum = function(){
	console.log(arguments);
};

sum(1,2,3,4,5,6);

/*
arguments doesn't support all the functions instead you can use spread operator. 
*/
sum = function(){
	// this way doesn't work
	//arguments.reduce((prev, num)=>prev+num);
	// you can make it work like below
	return Array.prototype.reduce.call(arguments, (prev,num)=> prev+num);
};

console.log('====================');
console.log('sum: '+sum(1,2,3,4,5,6));

// we can achieve the same thing using spread operator
sum = function(...args){
	return args.reduce((prev, num)=>prev+num);
};
console.log('====================');
console.log('sum: '+sum(1,2,3,4,5,6,7));


let max = Math.max(1,4,8,9);

console.log('====================');
console.log(max);

const numbers = [2,5,3,12,67];
max = Math.max.apply(null, numbers);
let min = Math.min.apply(null, numbers);
console.log('====================');
console.log(min);
console.log(max);

// using spread operator
max = Math.max(...numbers);
min = Math.min(...numbers);
console.log('====================');
console.log('Max: '+max + ' Min: '+min);






