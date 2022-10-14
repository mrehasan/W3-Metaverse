
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

const prompt = require('prompt-sync')();
var color = prompt("Enter the color of the Alien ");

if(color == "green")
console.log ("You have earned 5 Points")
else if (color == "yellow")
console.log ("You have earned 10 Points")
else if (color == "red")
console.log ("You have earned 15 Points")
else 
console.log (" Wrong Color :No Kill")