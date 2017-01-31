let numbers = [4,5,6,1,2,3];

/* it checks whether or not all the elements in the
 array are greater than 3. If the first element is not 
 greater than 3 then it breaks immediately and return false.
*/
let greaterThanThree = numbers.every((x,i)=>{
	console.log(i);
	return x > 3;
});

console.log(greaterThanThree);