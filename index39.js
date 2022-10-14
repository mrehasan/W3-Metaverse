/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of 
magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/

const magicians = ['Peter', 'James', 'Luis'];
function make_great(){
magicians.forEach((element, index) => {
  magicians[index] = "The Great " + magicians;
});
return magicians;
}
console.log(make_great());