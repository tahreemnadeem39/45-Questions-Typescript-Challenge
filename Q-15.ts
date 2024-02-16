/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */


let guestList: Array<string> = [
    "Khadija",
    "Ayesha",
    "Fatima"
];

//Step 1: Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guestWhoCantMakeIt : string = "Ayesha"
console.log(`${guestWhoCantMakeIt} cant make it to dinner.`)


//Step 2:Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.=
let NewGuest: string = "Amna"
let indexofguestWhoCantMakeIt : number = guestList.indexOf(guestWhoCantMakeIt)

//console.log(indexofguestWhoCantMakeIt)

if (indexofguestWhoCantMakeIt !== -1)
{
    guestList[indexofguestWhoCantMakeIt] = NewGuest
};

//console.log(guestList[2])

//Step 3:Print a second set of invitation messages, one for each person who is still in your list. 

console.log("Second set of invitation messages:")
guestList.forEach((guest:string) =>
{
    console.log(`Dear ${guest} you are invited to dinner.`)
});

export{guestList};

