// 1=>Install Node.js, TypeScript and VS Code on your computer.

// 2=>Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName: string = "Muhammad Zafeer"
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// 3=>Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var lowerCaseName: string = personName.toLowerCase()
var upperCaseName: string = personName.toUpperCase()
function toTitleCase(name: string) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
var titleCaseName: string = toTitleCase(personName)
console.log("lowerCaseName=>", lowerCaseName);
console.log("upperCaseName=>", upperCaseName);
console.log("titleCaseName=>", titleCaseName);

// 4=>Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// 5=>Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person: string = 'Albert Einstein'
var message: string = ` “A person who never made a mistake never tried anything new.”`
console.log(`${famous_person} once said, ${message}`);

// 6=>Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const nameWithWhitespace: string = "\t   Muhammad Zafeer\n   ";
console.log("Name with whitespace:", nameWithWhitespace);
const strippedName: string = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);

// 7=>Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(`Abbtiton= ${5 + 3} , Substraction= ${10 - 2} ,Multiplication= ${2 * 4} and Division= ${32 / 4}`);

// 8=>You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 8);
console.log(10 - 2);
console.log(2 * 4);
// The output will be 8
console.log(32 / 4);

// 9=>Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// Store your favorite number
var favoriteNumber: number = 7;
// Create a message to reveal your favorite number and print it
console.log(`My favorite number is ${favoriteNumber}.`);

// 10=>Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log(`The comments added in questions 8 and 9`);

// 11=>Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time
const arrayOfNames: string[] = ['Ali', 'Ahmad', 'Abdullah', 'Abubakar']
for (const name of arrayOfNames) console.log(name);

// 12=>Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (const name of arrayOfNames) console.log(`Welcome to the Ts, Dear ${name} `);

// 13=>Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const arrayOfTransport: string[] = ["Koenigsegg Trevita", "Pagani Huayra", "Pininfarina Sergio", "Aston Martin One-77"]
const arrayOfStatment: string[] = [" Own ", " Buy ", " have", " Purchase"]
for (const name of arrayOfTransport) {
    for (const statement of arrayOfStatment) {
        console.log(`I want to${statement} ${name}`);
    }
}
//OR
for (let i = 0; i < arrayOfTransport.length; i++) {
    console.log(`I want to${arrayOfStatment[i]} ${arrayOfTransport[i]}`);
}

// 14=>Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var messageToInvite: string = "Hi i hope you are doing well, i am very excited to invite you ion my Company party"
for (const name of arrayOfNames) console.log(`Dear ${name}, ${messageToInvite}`);

// 15=>Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
arrayOfNames.splice(2, 1)
// I remove the abdullah from the list now i am going to send messege to others
for (const name of arrayOfNames) console.log(`Dear ${name}, ${messageToInvite}`);

//16=>More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// add Guest on front/start
arrayOfNames.unshift("Abkar")
for (const name of arrayOfNames) console.log(`Dear ${name}, ${messageToInvite}`);
//add guest in mid of list 
arrayOfNames.splice(arrayOfNames.length / 2, 0, "Taha")
for (const name of arrayOfNames) console.log(`Dear ${name}, ${messageToInvite}`);

// 17=>Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("We have only Seats for two guests so we are dropping the others");
while (arrayOfNames.length > 2) {
    console.log(`${arrayOfNames[arrayOfNames.length - 1]} ,You are removed from our list`);
    arrayOfNames.pop()
}
for (const name of arrayOfNames) console.log(`Dear ${name}, ${messageToInvite}`);
while (arrayOfNames.length > 0) {
    console.log(`${arrayOfNames[arrayOfNames.length - 1]} ,You are removed from our list`);
    arrayOfNames.pop()
}
for (const name of arrayOfNames) console.log(`Dear ${name}, ${messageToInvite}`);

// 18=>Seeing the World: Think of at least five places in the world you’d like to visit.
const arrayOfPlaces: string[] = ["Istanbul", "Damashq", "Sapin", "Tokyo", "Damam World largest airport"]
for (const places of arrayOfPlaces) console.log(places);
for (const places of [...arrayOfPlaces].sort()) console.log(places);
for (const places of arrayOfPlaces) console.log(places);
for (const places of [...arrayOfPlaces].sort().reverse()) console.log(places);
for (const places of arrayOfPlaces) console.log(places);
for (const places of arrayOfPlaces.reverse()) console.log(places);
for (const places of arrayOfPlaces.reverse()) console.log(places);
for (const places of arrayOfPlaces.sort()) console.log(places);
for (const places of arrayOfPlaces) console.log(places);
for (const places of arrayOfPlaces.sort().reverse()) console.log(places);
for (const places of arrayOfPlaces) console.log(places);

// 19=>Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`The numbers of guests = ${arrayOfNames.length}`);

// 20=>Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const arrayOfCities: string[] = ["karachi", "Lahore", "Faisalabad", "Sailkot"]
for (const city of arrayOfCities) console.log(city);

// 21=>They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let myProfile: { name: string, dob: number, city: string } = {
    name: "M.Zafeer"
    , dob: 21,
    city: "FSD"
}
console.log(myProfile);

// 22=>Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const city: string = arrayOfCities[6]//accsessing the element not exists
const city1: string = arrayOfCities[2]//accsessing the element exists

// 23=>Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
if (arrayOfCities[2] === "Faisalabad") console.log(true);
if (arrayOfCities[1] === "Faisalabad") console.log(false);
if (arrayOfNames[2] === "Honda") console.log(false);
if (arrayOfNames[2] === "city") console.log(true);
if (arrayOfCities[4] === "Faisalabad") console.log(false);
if (arrayOfCities[0] === "Lahore") console.log(false);
if (arrayOfCities[2] === "Lahore") console.log(false);
if (arrayOfCities[3] === "Sailkot") console.log(true);
if (arrayOfCities[1] === "Lahore") console.log(true);

// 24=>More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following
//done in upper question

// 25=>Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color: string = "green"
if (alien_color === "green") console.log("the player just earned 5 points.");
if (alien_color === "red") { }

// 26=>Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
if (alien_color === "green") console.log("the player just earned 5 points for shooting the alien")
else console.log("the player just earned 10 points");
//version 2
alien_color = "red"
if (alien_color === "green") console.log("the player just earned 5 points for shooting the alien")
else console.log("the player just earned 10 points");

// 27=>Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
if (alien_color === "green") console.log("the player just earned 5 points for shooting the alien")
else if (alien_color === "yellow") console.log("the player just earned 10 points for shooting the alien");
else if (alien_color === "red") console.log("the player just earned 15 points for shooting the alien");
//version 2
alien_color = "yellow"
if (alien_color === "green") console.log("the player just earned 5 points for shooting the alien")
else if (alien_color === "yellow") console.log("the player just earned 10 points for shooting the alien");
else if (alien_color === "red") console.log("the player just earned 15 points for shooting the alien");
//version 3
alien_color = "green"
if (alien_color === "green") console.log("the player just earned 5 points for shooting the alien")
else if (alien_color === "yellow") console.log("the player just earned 10 points for shooting the alien");
else if (alien_color === "red") console.log("the player just earned 15 points for shooting the alien");

// 28=>Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
const age = 21;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// 29=>Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
const arrayOfFruits: string[] = ["banana", "apple", "strawberry"];
if (arrayOfFruits.includes("banana")) console.log("You really like bananas!");
if (arrayOfFruits.includes("apple")) console.log("You really like apples!");
if (arrayOfFruits.includes("orange")) console.log("You really like oranges!");
if (arrayOfFruits.includes("strawberry")) console.log("You really like strawberries!");
if (arrayOfFruits.includes("grape")) console.log("You really like grapes!");

// 30=>Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
const arrayOfAdmins: string[] = ["Admin", "Customer", "SuperAdmin", "Technition"]
for (const addmin of arrayOfAdmins) {
    if (addmin === "admin") console.log(`Hello admin, would you like to see a status report?`);
    else console.log(`Hey ${addmin} thank you for logging in again`);
}

// 31=>No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
if (arrayOfAdmins.length > 0) console.log("We First Clean the array");
while (arrayOfAdmins.length) arrayOfAdmins.pop()
if (!arrayOfAdmins.length) console.log("We need to find some users!");

//  32=>Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
const current_users: string[] = ["ali", 'Ahmad', 'akmal', 'akbar', 'abid'];
const new_users: string[] = ["hamza", 'ahmad', 'akmal', 'Mehmood', 'Abid'];

for (const nameOfCurrent of current_users) {
    let foundInBothArrays = false;
    for (const nameOfNew of new_users) {
        if (nameOfCurrent === nameOfNew) {
            foundInBothArrays = true;
            break;
        }
    }
    if (foundInBothArrays) console.log(nameOfCurrent, "found in both arrays");
    else console.log(nameOfCurrent, "not found in both arrays")
}

// 33=>Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in an array
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of arrayOfNumbers) {
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}

// 34=>Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
const arrayOfFavoritePizzas: string[] = ["Pepperoni", "Special", "Maliboti", "fagita"];
console.log("My favorite pizzas:");
for (const pizza of arrayOfFavoritePizzas) console.log(`I like ${pizza} pizza.`);
console.log("I really love pizza!");

// 35=>Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const arrayOfAnimals: string[] = ["Dog", "Cat", "Rabbit"];
console.log("List of Animals:");
for (const animal of arrayOfAnimals) console.log(`A ${animal.toLowerCase()} would make a great pet.`)
console.log("Any of these animals would make a great pet!");

// 36=>T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const make_shirt = (size: string = "Large", message: string = 'I love TypeScript') => console.log(`We are making "${size}" size shirts with the  message "${message}"`)
make_shirt("large", "16 September 2023 the date of print");

// 37=>Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
make_shirt("large")
make_shirt("medium")
make_shirt("samll", "The other messege")

// 38=>Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
const describe_city = (city: string = "Faisalabad", country: string = "Pakistan") => console.log(`${city} is in ${country = "Pakistan"}`)
describe_city("Karachi")
describe_city("Lahore")
describe_city("Faisalabad")

// 39=>City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
const city_country = (city: string, country: string) => console.log(`${city},${country}`);
city_country("Lahore", "Pakistan")
city_country("Paris", "France")
city_country("London", "England")

// 40=>Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface album {
    artist: string;
    title: string
    track?: number
}
const make_album = (album: album) => {
    return album;
}
console.log(make_album({ artist: 'Atif', title: 'AntThig' }));
console.log(make_album({ artist: 'John', title: 'Bash' }));
console.log(make_album({ artist: 'Akbar', title: 'Script', track: 34 }));

// 41=>Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const arrayOfMagiciains: string[] = ["Ali", "Akbar", "Babar", "Rizwan"]
const show_magicians = (magicians: string[]) => {
    for (const magician of magicians) console.log(magician);
}
show_magicians(arrayOfMagiciains)

// 42=>Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const make_great = (magicians: string[]) => {
    let modified_magicians: string[] = []
    for (const magician of magicians) modified_magicians.push(`${magician}, The great Magician`)
    return modified_magicians
}
console.log(make_great(arrayOfMagiciains));

// 43=>Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("original array =>");
show_magicians(arrayOfMagiciains)
console.log("modified array =>",)
show_magicians(make_great(arrayOfMagiciains))

// 44=>Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const makeSandwich = (items: string[]) => {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) console.log(`- ${item}`);
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Turkey", "Swiss", "Tomato", "Mayo"]);
makeSandwich(["Peanut Butter", "Jelly", "Banana", "Honey"]);

// 45=>Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
const storeCarInfo=(manufacturer: string, modelName: string)=> {
    const carInfo= {
        manufacturer,
        modelName,
    };
    return carInfo;
}
console.log(storeCarInfo("Toyota", "Camry",));
