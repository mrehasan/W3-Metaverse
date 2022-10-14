/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

var current_users = ["admin","hasan","bill","john","ali"];
var new_users = ["ali","bilal","qasim","bill"];

var new_lower = new_users.map(element => {
    return element.toLowerCase();
});
var new_upper = new_users.map(element => {
    return element.toUpperCase();
});

var current_lower = current_users.map(element => {
    return element.toLowerCase();
});
var current_upper = current_users.map(element => {
    return element.toUpperCase();
});

if (new_users[0] == current_lower[0] && new_users[0] == current_upper[0]){
    console.log(current_users[0] + " Username is not available")
}else{
    console.log(new_users[0] + "  Username is Available")
};
if (new_users[1] == current_lower[1] && new_users[1] == current_upper[1]){
    console.log(current_users[1] + " Username is not available")
}else{
    console.log(new_users[1] + "  Username is Available")
};
if (new_users[2] == current_lower[2] && new_users[2] == current_upper[2]){
    console.log(current_users[2] + " Username is not available")
}else{
    console.log(new_users[2] + "  Username is Available")
};
if (new_users[3] == current_lower[3] && new_users[3] == current_upper[3]){
    console.log(current_users[3] + " Username is not available")
}else{
    console.log(new_users[3] + "  Username is Available")
};

