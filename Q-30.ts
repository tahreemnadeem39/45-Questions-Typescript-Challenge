/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

// Make an array of usernames
let usernames: string[] = ["Admin", "Ali", "Basim", "Namal", "Noor"];

// Loop through the array and print a greeting to each user
for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello Admin, Welcome Back! Would you like to check any updates?");
    } else {
        console.log(`Hello ${username}, Welcome Back! Enjoy your time on our platform.`);
    }
};

