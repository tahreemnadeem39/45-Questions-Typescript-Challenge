/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/

// Alien Colors #1 - Passing Version
let alien_colorP: string = 'green';

if (alien_colorP === 'green') {
    console.log("Congratulations! You just earned 5 points.");
};


// Alien Colors #1 - Failing Version
let alien_colorF: string = 'red';

if (alien_colorF === 'green') {
    console.log("Congratulations! You just earned 5 points.");
};
export{};