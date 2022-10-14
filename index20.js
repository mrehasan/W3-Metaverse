const prompt = require('prompt-sync')();

const name = prompt(' Enter the name of Car');
const model = prompt(' Enter the model of Car');
const age = prompt('Enter the age of the car');
const rating = prompt('Enter rating of the car')
if (name == "subaro" && model == 1990 && age <=10 && rating >= 3)
console.log(true)
else 
console.log(false);
