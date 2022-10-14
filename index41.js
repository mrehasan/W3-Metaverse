/*
Sandwiches: Write a function that accepts a array of items a person 
wants on a sandwich. The function should have one parameter that collects 
as many items as the function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/

function sandwich(){
    this.datastore =[];

this.add = function(ingrediants){
   
        this.datastore.push({
            ingrediants
        });
        return this.datastore;
   
}    
}
var sandwich1 = new sandwich();
sandwich1.add("brown bread ,"+" Olives ,"+" chicken ,"+" katchup ");
sandwich1.add("Pita Bread ,"+" Olives ,"+" Beef ,"+" Chipottle ");
sandwich1.add("White bread ,"+" Salad ,"+" Minced Chicken ,"+" Mayo ");

console.log(sandwich1.datastore);
