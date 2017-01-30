let myMap = new Map();

//APIs
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo'));
console.log(myMap.has('foo'));
console.log(myMap.size);

//Iterators
//keys()
//values()
//entries()

for(let key of myMap.keys()){
	console.log(key);
}

for(let value of myMap.values()){
	console.log(value);
}

for(let [key,value] of myMap.entries()){
	console.log(key+' = '+value);
}

// concept of weakMap is there like in java where if there is
// no reference then it will be avail to garbaze collection.
// Also the enumeration methods not available.