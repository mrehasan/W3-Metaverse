/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

var username = ["admin","eric","mrehasan","paul","mike"];

username.splice(0,5,0);
if (username == 0){
    console.log("We need to Find new Users")
}else {
    console.log("error")
};
