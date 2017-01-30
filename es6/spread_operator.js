console.log(...[1,2,3,4]);

let first = [1,2,3];
let second = [5,6,7];

first.push(...second);

console.log(first);

function addThree(a, b, c){
	let result = a + b + c;
	console.log('sum: '+result);
}

addThree(...first);
addThree(...second);