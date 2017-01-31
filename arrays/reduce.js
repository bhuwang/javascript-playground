let items = [1,2,3,4,5];
/*
Here the loop only runs 4 times instead of 5 because it places
prev and item first then start operation. In each operation it
places result in the prev and so on.
*/
const sum = items.reduce((prev, item)=>{
	console.log(`prev: ${prev} item: ${item}`);
	return prev+item;
});

console.log(sum);

/* 
if you put the second argument to reduce function then it
actually runs for 5 times becaue prev starts with the second 
argument in this case.
*/
const sum1 = items.reduce((prev, item)=>{
	console.log(`prev: ${prev} item: ${item}`);
	return prev+item;
}, 10);

console.log(sum1);


const albums = [
    {
        title: 'Holiday in Spain',
        images: ['01.jpg','02.jpg','03.jpg']
    },
    {
        title: 'Holiday in Italy',
        images: ['01.jpg','02.jpg']
    }
];
/* 
in this case if you do not put the second argument then we 
will not get the desired result. 
*/
let totalPictures = albums.reduce((prev, album) => {
    return prev + album.images.length;
},0);

console.log(`total pictures: ${totalPictures}`);

// OR

totalPictures = albums.reduce((prev, album) => {
    return prev.concat(album.images);
},[]);

console.log(`total pictures: ${totalPictures}`);