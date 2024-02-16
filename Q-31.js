/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// Make an array of usernames
let usernames = [];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print a greeting to each user
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, welcome back! Would you like to check any updates?");
        }
        else {
            console.log(`Hello ${username}, welcome back! Enjoy your time on our platform.`);
        }
    }
}
;
export {};
