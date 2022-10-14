/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/

const prompt = require('prompt-sync')();

var alien_color = "green";

var color = prompt("Enter the color");
if(alien_color == color)
console.log("you have earned 5 Points");
else 
console.log("you have just earned 10 Points");