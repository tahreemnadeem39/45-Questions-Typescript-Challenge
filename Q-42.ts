/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Create an array of magician's names
let magician_names: string[] = ["David", "Harry", "Peter", "Teller"];

// Call the make_great function to modify the array of magician's names
let great_magicians: string[] = make_great(magician_names);

// Call the show_magicians function to see the modified list
show_magicians(great_magicians);
