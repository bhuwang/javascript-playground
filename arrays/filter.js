let numbers = [1,3,6,9,8,12,23,16,25];

let filtered = numbers.filter(number=>number%2==0);

console.log(filtered);


const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000;
const searchTerm = 'array';

const filteredLessions = lessons
.filter(x=>x.tags.indexOf(searchTerm)>-1)
.filter(x=>x.views>minViews)
.sort((lesson1, lesson2)=>lesson2-lesson1)
.map(x=>`  <li>${x.title} (${x.views})</li>`)
.join("\n");

console.log(`<ul>
${filteredLessions}
</ul>`);