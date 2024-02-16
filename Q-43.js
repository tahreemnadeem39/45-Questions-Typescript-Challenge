/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Create an array of magician's names
let magician_names = ["David", "Harry", "Peter", "Teller"];
// Call the make_great function with a copy of the array of magician's names
let great_magicians = make_great([...magician_names]); // Making a copy of the array using the spread operator
// Call the show_magicians function to show the original array of magician's names
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the show_magicians function to show the array of great magician's names
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
export {};
