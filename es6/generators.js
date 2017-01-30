function* greet(){
	console.log(`you called 'how'`);
	yield "How";
	console.log(`you called 'are'`);
	yield "Are";
	console.log(`you called 'you'`);
	yield "You";
}

let greeter  = greet();
/*
console.log(greeter);

let how = greeter.next();
console.log(how);

let are = greeter.next();
console.log(are);

let you = greeter.next();
console.log(you);
*/

//you can use for each
/*for(let greet of greeter){
	console.log(greet);
}*/

console.log(greeter.next().value);
console.log(greeter.next().value);
console.log(greeter.next().value);


function* graph(){
	let x = 0;
	let y = 0;
	while(true){
		yield{x:x, y:y}
		x+=2;
		y+=1;
	}
}

let graphGenerator = graph();

console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);