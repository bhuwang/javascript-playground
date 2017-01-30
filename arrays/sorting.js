var items = [3,50,5,60,33,10]

console.log(items.sort());

// sorting numeric ascending order
console.log(items.sort((a,b)=>a-b));

//desc order
console.log(items.sort((a,b)=>b-a));

var names=['Bhuwan','Naresh','Bipen','Rita','Balabhadra','Yaju'];

// sort by length ascending
console.log(names.sort((a,b)=>a.length-b.length));

// sorty by length desc
console.log(names.sort((a,b)=>b.length-a.length));