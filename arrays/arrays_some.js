let numbers = [1,2,3,4,5,6];

// it checks whether or not 3 exists, if it founds
// then it immediately returns the result.
let hasThree = numbers.some((x,i)=>{
	console.log(i);
	return x===3;
});

console.log(hasThree);