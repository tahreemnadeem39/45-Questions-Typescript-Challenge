//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Define an array containing three elements
const colors = ["Red", "Green", "Blue"];
// Intentionally try to access an element at an index that doesn't exist
console.log(colors[3]); // This will cause an index error because the array has only three elements (indices 0, 1, and 2)
// After noticing the error, correct the index to access a valid element
console.log(colors[2]); // Accessing the element at index 2 (which is "Blue")
// Output the entire array to ensure it's intact
console.log(colors);
export {};
