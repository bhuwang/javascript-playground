const pets = ['Cat','Dog'];

/*
Calling push on array also known as destructive update
Meaning it push the new value to the existing array. This is a
constrasting behavior with concat
*/

//#1
//pets.push('Goat','Horse');

const whishlist = ['Goat','Horse','Snake'];

//#2
pets.push.apply(pets, whishlist);

console.log(pets);