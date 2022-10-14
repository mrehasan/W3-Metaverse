/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and 
store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array with the 
Great added to each magician’s name.
*/

var magician = ["Peter", "James","Kamal"];

function show_magicians(){
   return magician;
}

console.log(show_magicians());

const magicians = ['Peter', 'James', 'Luis'];
function make_great(){
magicians.forEach((element, index) => {
  magicians[index] = "The Great " + magicians;
});
return magicians;
}
console.log(make_great());
