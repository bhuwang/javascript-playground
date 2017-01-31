var items = [3,50,5,60,33,10]

console.log(items.sort());
console.log('=====================================')
// sorting numeric ascending order
console.log(items.sort((a,b)=>a-b));
console.log('=====================================')
//desc order
console.log(items.sort((a,b)=>b-a));

var names=['Bhuwan','Naresh','Bipen','Rita','Balabhadra','Yaju'];
console.log('=====================================')
// sort by length ascending
console.log(names.sort((a,b)=>a.length-b.length));
console.log('=====================================')
// sorty by length desc
console.log(names.sort((a,b)=>b.length-a.length));


var lessions = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

//sort by views desc
console.log('=====================================')
console.log(lessions.sort((lession1,lession2)=>lession2.views - lession1.views));