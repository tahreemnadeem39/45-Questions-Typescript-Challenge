/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */

// Define the describe_city function with a default parameter for country
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city("Karachi"); // City in the default country
describe_city("London", "United Kingdom"); // City not in the default country
describe_city("New York", "USA"); // Another city not in the default country
