"use strict";
//Q:2 // Personal Message: Store a person’s name in a variable,
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Hassan";
console.log(`Hello ${name}, How are you today?`);
//Q:3 //Printing that person’s name in lowercase, uppercase, and titlecase.
let name1 = "Hassan";
console.log(`Hello ${name1.toLowerCase()}, How are you today?`);
console.log(`Hello ${name1.toUpperCase()}, How are you today?`);
const titleCase = name1
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(`Hello ${titleCase}, How are you today`);
//Q:4 , Q:5 //Famous Quote
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
let famous_person = "Albert Einstein";
let message = "A person who never made a mistake never tried anything new.";
console.log(`${famous_person},  ${message}`);
//Q:6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and the end. 
let name3 = "   Muhammad \n  Hassan  \t Hy \t Waseer ";
console.log(name3);
//After triming
console.log(name3.trim());
//Q:7: Number Eight: Write addition, subtraction, multiplication, and division operations.
console.log(12 - 8);
console.log(4 * 2);
console.log(24 / 8);
//Q:8
console.log("-------------------------------------");
console.log(5 + 3);
console.log("-------------------------------------");
console.log(12 - 8);
console.log("-------------------------------------");
console.log(4 * 2);
console.log("-------------------------------------");
console.log(24 / 8);
console.log("-------------------------------------");
//Q:9 Storing Favorite Number.
const fav_number = 9;
let fav_number_message = `My favorite number is ,  ${fav_number} `;
console.log(fav_number_message);
//Q:10 Adding Comments.
//Muhammad Hassan
//This program take two number and return their sum.
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(3, 9));
//Q:11 // Define an array called 'names' to store your friends' names
let names = ["Friend1", "Friend2", "Friend3", "Friend4"];
// Iterate through the 'names' array and print each person's name
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Q:12 // Define an array called 'names' to store your friends' names
let names1 = ["Friend1", "Friend2", "Friend3", "Friend4"];
// Iterate through the 'names' array and print a personalized message for each person
for (let i = 0; i < names1.length; i++) {
    const name = names1[i];
    const message = `Hello, ${name}! I hope you're having a great day.`;
    console.log(message);
}
//Q:13 // Create an array with your favorite car makes
const carMakes = ["Honda", "Toyota", "Ford", "BMW", "Mercedes-Benz"];
// Print statements about each car make
for (const make of carMakes) {
    console.log(`I would like to own a ${make} car.`);
}
//Q:14 // Create an array with people you'd like to invite to dinner
const guestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Iterate through the array and send invitations
for (const guest of guestList) {
    console.log(`Dear ${guest}, I would like to invite you to a special dinner.`);
}
//Q:15 // Create an array with people you'd like to invite to dinner
const guestList1 = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Marie Curie";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGuest = "Nikola Tesla";
const indexOfCancelledGuest = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfCancelledGuest !== -1) {
    guestList1[indexOfCancelledGuest] = newGuest;
}
// Send out a new set of invitation messages
for (const guest of guestList1) {
    console.log(`Dear ${guest}, I would like to invite you to a special dinner.`);
}
//Q:16 // Create an array with people you'd like to invite to dinner
const guestList2 = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Nikola Tesla"];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt1 = "Marie Curie";
console.log(`Unfortunately, ${guestWhoCantMakeIt1} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGuest1 = "Thomas Edison";
const indexOfCancelledGuest1 = guestList2.indexOf(guestWhoCantMakeIt1);
if (indexOfCancelledGuest1 !== -1) {
    guestList2[indexOfCancelledGuest1] = newGuest1;
}
// Inform people that you found a bigger dinner table
console.log("Great news! We've found a bigger dinner table.");
// Add more guests
guestList2.unshift("Isaac Newton"); // Add one guest to the beginning
guestList2.splice(2, 0, "Galileo Galilei"); // Add one guest to the middle
guestList2.push("Charles Darwin"); // Add one guest to the end using push
// Send out new invitation messages
for (const guest of guestList2) {
    console.log(`Dear ${guest}, I would like to invite you to a special dinner.`);
}
//Q:17 // Create an array with people you'd like to invite to dinner
const guestList3 = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie",
    "Nikola Tesla",
    "Isaac Newton",
    "Galileo Galilei",
    "Charles Darwin"
];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt2 = "Marie Curie";
console.log(`Unfortunately, ${guestWhoCantMakeIt2} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGuest2 = "Thomas Edison";
const indexOfCancelledGuest2 = guestList3.indexOf(guestWhoCantMakeIt2);
if (indexOfCancelledGuest2 !== -1) {
    guestList3[indexOfCancelledGuest2] = newGuest2;
}
// Inform people that you found a bigger dinner table
console.log("Great news! We've found a bigger dinner table.");
// Add more guests
guestList3.unshift("Isaac Newton"); // Add one guest to the beginning
guestList3.splice(2, 0, "Galileo Galilei"); // Add one guest to the middle
guestList3.push("Charles Darwin"); // Add one guest to the end using push
// Inform that you can invite only two people
console.log("Unfortunately, we can invite only two people for dinner.");
// Remove guests until only two names remain
while (guestList3.length > 2) {
    const removedGuest = guestList3.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print invitations to the two people still on your list
for (const guest of guestList3) {
    console.log(`Dear ${guest}, you are still invited to the dinner.`);
}
// Remove the last two names to have an empty list
guestList3.pop();
guestList3.pop();
// Print the empty list
console.log("Empty guest list:", guestList3);
//Q:18 // Create an array with places you'd like to visit
const placesToVisit = [
    "Tokyo, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Bora Bora, French Polynesia",
    "Marrakech, Morocco"
];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical order:", sortedAlphabetically);
// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
const sortedReverseAlphabetically = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", sortedReverseAlphabetically);
// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again to return to the original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
console.log("Sorted alphabetically:", placesToVisit);
// Sort the array to store it in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted reverse alphabetically:", placesToVisit);
//Q:19 // Create an array with people you'd like to invite to dinner
const guestList4 = [
    "Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Nikola Tesla",
    "Isaac Newton", "Galileo Galilei", "Charles Darwin"
];
// Print the number of people you are inviting to dinner
console.log(`You are inviting ${guestList4.length} people to dinner.`);
//Q:20 // Create an array of famous mountains
const mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Denali",
    "Matterhorn",
    "Mont Blanc",
    "Mount Kilimanjaro",
    "Mount McKinley",
    "Mount Fuji",
    "Mount Rainier"
];
// Print the list of famous mountains
console.log("List of Famous Mountains:");
for (const mountain of mountains) {
    console.log(mountain);
}
//Q:21 // Create an array of objects to store information about famous rivers
const rivers = [
    {
        name: "Nile River",
        length: "6,650 km",
        location: "Africa"
    },
    {
        name: "Amazon River",
        length: "6,400 km",
        location: "South America"
    },
    {
        name: "Yangtze River",
        length: "6,300 km",
        location: "China"
    },
    {
        name: "Mississippi River",
        length: "3,730 km",
        location: "North America"
    },
    {
        name: "Danube River",
        length: "2,860 km",
        location: "Europe"
    }
];
// Print information about the famous rivers
console.log("Information about Famous Rivers:");
rivers.forEach((river, index) => {
    console.log(`River ${index + 1}:`);
    console.log(`Name: ${river.name}`);
    console.log(`Length: ${river.length}`);
    console.log(`Location: ${river.location}`);
    console.log("");
});
//Q:22 // Create an array
const colors = ["red", "blue", "green", "yellow"];
// Intentionally try to access an element with an invalid index
const invalidIndex = 10;
console.log(`Attempting to access element at index ${invalidIndex}: ${colors[invalidIndex]}`);
// Correct the error
const validIndex = 2;
console.log(`Accessing element at index ${validIndex}: ${colors[validIndex]}`);
//Q:23
let x = 5;
let y = 10;
let name2 = "John";
let age = 30;
let fruit = "apple";
let isSunny = true;
console.log("Is x equal to 5? I predict True.");
console.log(x == 5);
console.log("Is y not equal to 10? I predict False.");
console.log(y != 10);
console.log("Is name equal to 'John'? I predict True.");
console.log(name2 == "John");
console.log("Is age greater than or equal to 25? I predict True.");
console.log(age >= 25);
console.log("Is fruit equal to 'banana'? I predict False.");
console.log(fruit == "banana");
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is age not equal to 30? I predict False.");
console.log(age != 30);
console.log("Is isSunny equal to true? I predict True.");
console.log(isSunny == true);
console.log("Is x + y equal to 15? I predict True.");
console.log(x + y == 15);
console.log("Is age less than or equal to 20? I predict False.");
console.log(age <= 20);
//Q:24 // Tests for equality and inequality with strings
let country1 = "USA";
let country2 = "Canada";
console.log("Is country1 equal to 'USA'? I predict True.");
console.log(country1 === 'USA');
console.log("Is country2 not equal to 'Mexico'? I predict True.");
console.log(country2 !== 'Mexico');
// Tests using the lower case function
let text = "Hello, World!";
console.log("Is 'text' in all lowercase? I predict False.");
console.log(text.toLowerCase() === text);
// Numerical tests
let number1 = 20;
let number2 = 30;
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);
console.log("Is number1 greater than number2? I predict False.");
console.log(number1 > number2);
console.log("Is number1 less than or equal to number2? I predict True.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
let isRaining = true;
let isnotSunny = false;
console.log("Is it raining and not sunny? I predict True.");
console.log(isRaining && !isnotSunny);
// Test whether an item is in an array
let fruits = ["apple", "banana", "cherry", "date"];
console.log("Is 'banana' in the 'fruits' array? I predict True.");
console.log(fruits.includes("banana"));
// Test whether an item is not in an array
console.log("Is 'grape' not in the 'fruits' array? I predict True.");
console.log(!fruits.includes("grape"));
//Q:25 
// Version that passes the if test:
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points!");
}
//Version that fails the if test:
let alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log("Player just earned 5 points!");
}
//Q:26 
//Version that runs the if block (alien_color is green):
let alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
//Version that runs the else block (alien_color isn't green):
let alien_color4 = 'red';
if (alien_color4 === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
//Q:27 
//Version for a green alien (5 points):
let alien_color5 = 'green';
if (alien_color5 === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
else if (alien_color5 === 'yellow') {
    console.log("Player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color5 === 'red') {
    console.log("Player just earned 15 points for shooting the red alien.");
}
// Version for a yellow alien (10 points):
let alien_color6 = 'yellow';
if (alien_color6 === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
else if (alien_color6 === 'yellow') {
    console.log("Player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color6 === 'red') {
    console.log("Player just earned 15 points for shooting the red alien.");
}
//Version for a red alien (15 points):
let alien_color7 = 'red';
if (alien_color7 === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
else if (alien_color7 === 'yellow') {
    console.log("Player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color7 === 'red') {
    console.log("Player just earned 15 points for shooting the red alien.");
}
//Q:28 
// A person's stage of life based on their age using an if-else chain:
let age1 = 30;
if (age1 < 2) {
    console.log("The person is a baby.");
}
else if (age1 < 4) {
    console.log("The person is a toddler.");
}
else if (age1 < 13) {
    console.log("The person is a kid.");
}
else if (age1 < 20) {
    console.log("The person is a teenager.");
}
else if (age1 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q:29
// Create an array of your favorite fruits
const favorite_fruits = ["apple", "banana", "strawberry"];
// Check for specific fruits and print statements
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
//Q:30
// Create an array of usernames
const usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Q:31 // List of users
let users = ['Alice', 'Bob', 'Charlie', 'David'];
// Check if the list is not empty
if (users.length > 0) {
    // Iterate through the list of users and print a message for each user
    for (const user of users) {
        console.log(`Hello, ${user}!`);
    }
    // Remove all usernames from the array
    users.length = 0;
    // Check if the list is now empty
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
}
else {
    console.log("We need to find some users!");
}
//Q:32 // List of current users
const currentUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// List of new users
const newUsers = ['Frank', 'Eve', 'Grace', 'Bob', 'Hannah'];
// Convert currentUsers to lowercase for case-insensitive comparison
const currentUsersLower = currentUsers.map(user => user.toLowerCase());
// Loop through the newUsers list to check for availability
for (const newUser of newUsers) {
    const newUserLower = newUser.toLowerCase();
    if (currentUsersLower.includes(newUserLower)) {
        console.log(`The username '${newUser}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
//Q:33 // Store the numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (const number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Q:34 // Store the names of favorite pizzas in an array
const favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
// Use a for loop to print each pizza name and a sentence about it
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Add a statement about how much you like pizza
console.log("I really love pizza!");
//Q:35 // Store the names of three animals with a common characteristic in an array
const animals = ["Dog", "Cat", "Rabbit"];
// Use a for loop to print a statement about each animal
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
// Add a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");
//Q:36 // TypeScript function called makeShirt that accepts a size and a message.
function makeShirt(size, message) {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
}
// Call the function
makeShirt("Medium", "Hello, World!");
//Q:37 // Modified function and examples of creating large, medium, and custom-sized shirts:
function makeShirt1(size = "Large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
}
// Create a large shirt with the default message
makeShirt1();
// Create a medium shirt with the default message
makeShirt1("Medium");
// Create a custom-sized shirt with a different message
makeShirt1("Small", "TypeScript is awesome!");
//Q:38 // function called describe_city() that accepts the name of a city and its country.
function describeCity(city, country = "default country") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("Sydney", "Australia");
//Q:39 // The function should return a string formatted.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three different city-country pairs
const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("New York", "USA");
const location3 = cityCountry("Sydney", "Australia");
console.log(location1);
console.log(location2);
console.log(location3);
//Q:40 // TypeScript function called makeAlbum that builds an object describing a music album.
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album objects using the makeAlbum function
const album1 = makeAlbum("Artist1", "Album 1");
const album2 = makeAlbum("Artist2", "Album 2", 12); // Include the number of tracks
const album3 = makeAlbum("Artist3", "Album 3", 8); // Include the number of tracks
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
//Q:41 // TypeScript function called showMagicians that takes an array of magician names and prints each name. 
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create an array of magician names
const magicianNames = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Derren Brown"];
// Call the showMagicians function to print the names
showMagicians(magicianNames);
//Q:42 // Great Magicians: Start with a copy of your program from Exercise 39.
function makeGreat(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
function showMagicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create an array of magician names
const magicianNames1 = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Derren Brown"];
// Use the makeGreat function to modify the array
const greatMagicianNames1 = makeGreat(magicianNames1);
// Call showMagicians to see the modified list
showMagicians1(greatMagicianNames1);
//Q:43 // Unchanged Magicians: Start with your work from Exercise 40.
function makeGreat1(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
function showMagicians2(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create an array of magician names
const magicianNames2 = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Derren Brown"];
// Create a copy of the array with the original names
const originalMagicianNames = magicianNames2.slice();
// Use the makeGreat function to modify a separate copy of the array
const greatMagicianNames = makeGreat1(originalMagicianNames);
// Call showMagicians to see the original and modified lists
console.log("Original Magician Names:");
showMagicians2(originalMagicianNames);
console.log("\nModified Magician Names:");
showMagicians2(greatMagicianNames);
//Q:44 // Write a function that accepts a array of items a person wants on a sandwich. 
function makeSandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
makeSandwich("Lettuce", "Tomato", "Turkey", "Cheese");
makeSandwich("Bacon", "Egg");
makeSandwich("Peanut Butter", "Jelly");
//Q:45 //  function that stores information about a car in a Object. 
function createCar(manufacturer, model, ...details) {
    const carInfo = { manufacturer, model };
    for (const [key, value] of details) {
        carInfo[key] = value;
    }
    return carInfo;
}
const car = createCar("Toyota", "Camry", ["color", "Blue"], ["features", ["Navigation", "Sunroof"]]);
console.log(car);
