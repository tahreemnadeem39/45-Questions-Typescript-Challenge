/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */

// Define an array to store the names of famous mountains
const mountains: string[] = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Makalu",
    "Lhotse",
    "Cho Oyu",
    "Annapurna",
    "Dhaulagiri",
    "Manaslu",
    "Nanga Parbat"
];

// Print the array containing the names of famous mountains
console.log("List of Famous Mountains:");
mountains.forEach((mountain, index) => {
    console.log(`${index + 1}. ${mountain}`);
});
