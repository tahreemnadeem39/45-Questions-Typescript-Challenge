/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
// Test 1: Is 5 equal to 5? I predict True.
console.log("Is 5 === 5? I predict True.");
console.log(5 === 5);
// Test 2: Is 10 greater than 5? I predict True.
console.log("Is 10 > 5? I predict True.");
console.log(10 > 5);
// Test 3: Is 'apple' equal to 'banana'? I predict False.
const firstString = 'apple';
const secondString = 'banana';
console.log(`Is '${firstString}' === '${secondString}'? I predict False.`);
console.log(firstString === secondString);
// Test 4: Is 10 less than or equal to 5? I predict False.
console.log("Is 10 <= 5? I predict False.");
console.log(10 <= 5);
// Test 5: Is 'car' not equal to 'truck'? I predict True.
const car = 'car';
const truck = 'truck';
console.log(`Is '${car}' !== '${truck}'? I predict True.`);
console.log(car !== truck);
// Test 6: Is 3 multiplied by 4 equal to 12? I predict True.
console.log("Is 3 * 4 === 12? I predict True.");
console.log(3 * 4 === 12);
// Test 7: Is the length of 'hello' equal to 5? I predict True.
console.log("Is 'hello'.length === 5? I predict True.");
console.log('hello'.length === 5);
// Test 8: Is 'cat' contained within 'caterpillar'? I predict True.
console.log("Is 'caterpillar'.includes('cat')? I predict True.");
console.log('caterpillar'.includes('cat'));
// Test 9: Is 7 divided by 2 equal to 3? I predict False.
console.log("Is 7 / 2 === 3? I predict False.");
console.log(7 / 2 === 3);
// Test 10: Is 20 not equal to '20'? I predict True.
console.log("Is 20 !== '20'? I predict True.");
console.log(20 !== 20);
export {};
