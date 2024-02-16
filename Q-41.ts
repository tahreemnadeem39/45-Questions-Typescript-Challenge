/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magician_names: string[] = ["David ", "Harry", "Peter", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magicians(magician_names);
