/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log("Is 'apple' === 'apple'? I predict True.");
console.log('apple' === 'apple'); // True
console.log("Is 'apple' !== 'apple'? I predict False.");
console.log('apple' !== 'apple'); // False

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log("Is 'Hello'.toLowerCase() === 'hello'? I predict True.");
console.log('Hello'.toLowerCase() === 'hello'); // True
console.log("Is 'WORLD'.toLowerCase() === 'world'? I predict True.");
console.log('WORLD'.toLowerCase() === 'world'); // True
console.log("Is 'HELLO'.toLowerCase() === 'world'? I predict False.");
console.log('HELLO'.toLowerCase() === 'world'); // False

// Numerical tests
console.log("\nNumerical tests:");
console.log("Is 5 === 5? I predict True.");
console.log(5 === 5); // True
console.log("Is 10 > 5? I predict True.");
console.log(10 > 5); // True
console.log("Is 5 < 10? I predict True.");
console.log(5 < 10); // True
console.log("Is 10 >= 5? I predict True.");
console.log(10 >= 5); // True
console.log("Is 5 <= 10? I predict True.");
console.log(5 <= 10); // True
console.log("Is 5 !== 5? I predict False.");
console.log(5 !== 5); // False
console.log("Is 5 > 10? I predict False.");
console.log(5 > 10); // False
console.log("Is 10 < 5? I predict False.");
console.log(10 < 5); // False
console.log("Is 5 >= 10? I predict False.");
console.log(5 >= 10); // False
console.log("Is 10 <= 5? I predict False.");
console.log(10 <= 5); // False

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log("Is (5 > 3) && (10 < 20)? I predict True.");
console.log((5 > 3) && (10 < 20)); // True
console.log("Is (5 > 3) && (10 > 20)? I predict False.");
console.log((5 > 3) && (10 > 20)); // False
console.log("Is (5 > 3) || (10 > 20)? I predict True.");
console.log((5 > 3) || (10 > 20)); // True
console.log("Is (5 < 3) || (10 > 20)? I predict False.");
console.log((5 < 3) || (10 > 20)); // False

// Test whether an item is in an array
const fruits: string[] = ["apple", "banana", "orange"];
console.log("\nTest whether an item is in an array:");
console.log("Is 'apple' in the array? I predict True.");
console.log(fruits.includes('apple')); // True
console.log("Is 'grape' in the array? I predict False.");
console.log(fruits.includes('grape')); // False

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log("Is 'banana' not in the array? I predict False.");
console.log(!fruits.includes('banana')); // False
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape')); // True
