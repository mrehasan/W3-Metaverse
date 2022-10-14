/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

const prompt = require('prompt-sync')();

var favorite_fruit = ["apple","banana","kiwi"];
var fruit = prompt("Enter your Favourite Fruit");
if (fruit=== favorite_fruit[0]){
    console.log("You Like Apple")
}else if (fruit=== favorite_fruit[1]){
    console.log("You like banana")
}else if (fruit === favorite_fruit[2]){
    console.log("You like kiwi")
}else if (fruit === "mango"){
    console.log("You like mango, But that is not in our list")
}else {
    console.log("Sorry Your fruit is not Available")
};