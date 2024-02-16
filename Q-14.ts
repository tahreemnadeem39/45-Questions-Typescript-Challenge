//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Define an array called 'guestList' with at least three people you'd like to invite to dinner
let guestList: Array<string> = [
    "Khadija",
    "Ayesha",
    "Fatima"
];

// Iterate through the array and print a personalized invitation for each person
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nLooking forward to seeing you!\nBest regards,\nTahreem`);
});
