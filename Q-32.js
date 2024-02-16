/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
// Make a list of current users
let current_users = ["ali", "bisma", "john", "dawood", "emman"];
// Make a list of new users
let new_users = ["charlie", "david", "JOHN", "dawood", "ammara"];
// Loop through the new users list to check if each username is unique
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    // Check if the lowercase version of the new username exists in the lowercase version of the current users' list
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
export {};
