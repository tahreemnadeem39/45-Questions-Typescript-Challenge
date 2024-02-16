//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define TypeScript objects containing basic information about different fruits
const fruits: Record<string, string>[] = [
    { name: "Apple", color: "Red", taste: "Sweet" },
    { name: "Banana", color: "Yellow", taste: "Sweet" },
    { name: "Orange", color: "Orange", taste: "Citrusy" }
];

// Print information about each fruit
console.log("Information about Different Fruits:");
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit.name}:`);
    console.log(`   - Color: ${fruit.color}`);
    console.log(`   - Taste: ${fruit.taste}`);
    console.log();
});
