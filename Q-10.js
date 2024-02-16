//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Define a constant variable 'personName' with a string value
const personName = "Muhammad Kamal Hussain";
// Convert the name to lowercase and print it
console.log("Lowercase:", personName.toLowerCase());
// Convert the name to uppercase and print it
console.log("Uppercase:", personName.toUpperCase());
// Split the name into an array of words
let words = personName.split(" ");
// Initialize an empty string to store the titlecased name
let titlecaseName = "";
// Iterate through each word in the array
for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word and append it to the titlecased name
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
// Print the titlecased name
console.log("Titlecase:", titlecaseName);
export {};
