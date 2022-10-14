/*
T-Shirt: Write a function called make_shirt() that accepts a size and 
the text of a message that should be printed on the shirt. The function 
should print a sentence summarizing the size of the shirt and the message
printed on it. Call the function.
*/
 
{
const prompt = require('prompt-sync')();

        var size = prompt("Enter the size");
        var text = prompt("Enter the text");
    function make_shirt(){
      console.log(size);
      console.log(text);  
}
 make_shirt();
}