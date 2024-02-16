/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
// Define the function to store information about a car
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    // Store additional options provided as arguments
    for (let option of options) {
        for (let key in option) {
            if (option.hasOwnProperty(key)) {
                car.options[key] = option[key];
            }
        }
    }
    return car;
}
// Call the function with required information and additional options
let carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { features: ["Navigation", "Sunroof"] });
// Print the object that's returned to verify all information was stored correctly
console.log(carInfo);
export {};
