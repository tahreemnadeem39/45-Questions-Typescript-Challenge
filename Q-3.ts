// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store a person's name in a variable
const personName :string = "Mohsin Iqbal";

// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the name in titlecase
let words: string[] = personName.split( " ");
 
let titlecaseName: string = ""

for ( let i = 0 ; i < words.length ; i ++) {
    titlecaseName += words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+ " "
};

console.log("Titlecase:" , titlecaseName)