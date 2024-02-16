/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

// Define the make_shirt function with default parameters
function make_shirt(size: string = "large", message: string = "anything else you want?"): void {
    console.log(`The shirt is ${size} size and has the message: "${message}".`);
}

// Call the make_shirt function with different combinations
make_shirt(); // Default call: large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "we only have small size."); // Small shirt with custom message
