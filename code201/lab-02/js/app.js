'use strict';

// Adding a value to track the number of correct answers to my questions:
let correctGuess = 0

// Greeting and getting user name
let userName = prompt('Hello, what is your name?');
alert("Hello, " + userName + ". Please answer the following question Yes or No. I'm not that experienced of a programmer to handle any other response... Yet!!!");

//Asking the user if they know my name
let myName = prompt('Is my name Brett?, Yes or No?');
let uppercaseName = myName.toUpperCase();

//Responed back to the user if they are correct on my name
if (uppercaseName === 'YES') {
    alert('You are correct!!!');
    ++correctGuess;
} else {
    alert('You do not know Brett!!!')
}

// Ask the user if I'm old?
let myAge = prompt('Am I a old man?').toUpperCase();

// Respond back to the user if they are correct on myAge question.
if (myAge === 'YES') {
    alert("No, I'm still young at heart.");
} else {
    alert("Very good answer... I still look good.");
    ++correctGuess;
}

// Ask user is I was in the Air Force
let myCareer = prompt('Was I in the Air Force?').toUpperCase();

// Respond back if they got my Air Force correct
if (myCareer === 'YES') {
    alert("Correct, I was in the Chair Force as some would say.");
    ++correctGuess;
} else {
    alert('Incorrect, I was in the Air Foce. I miss being able to see the world!!!');
}

// Ask user the reason for taking this class
let myGoal = prompt("Is the reason I'm taking this class to make more money?").toUpperCase();

// Responed back if user was correct on reason for why I'm taking the class
if (myGoal === 'NO') {
    alert("Correct, I'm taking this class to further my education into the Software Development Career Field.");
    ++correctGuess;
} else {
    alert("Incorrect, some what. More money is nice but not the main reason I'm taking this class.");
}

// Ask what is my favorite hobby
let myHobby = prompt('My favorite hobby is to snowboard?').toUpperCase();

// Respond to the user if they are correct on my Hobby
if (myHobby === 'YES') {
    alert('Incorrect... My favorite hobby is skiing but I have taken up snowboarding');
} else {
    alert("Correct. I can not wait for the ski season to start but I'll miss some of it while being in this class.");
    ++correctGuess;
}

// Guess my Age question with parseInt converting the string to an integer.
let attemps = 4;
let userGuess;

while (attemps > 0) {
    // prompt the user to guess 
    userGuess = parseInt(prompt('Please try and guess how many animals I have at home?'));

    // Check if they guess correctly
    if (userGuess === 10) {
        alert('Correct! I have two dogs and eight ducks.')
        ++correctGuess;
        break;
    } else if (userGuess > 10) {
        alert("To high!, try again");
    } else {
        alert("Too low! Try agian.");
    }
    attemps--;
}

if (attemps === 0) {
    alert('Sorry, you used up your four attempts. The correct answer was 10.');
}


// Seven question that has multiple possible correct answers stored in an array
let favColor = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink']
console.log(favColor)
let counter = 1;
let tries = 6;

let guessColor = prompt("Please guess my favorite color? Possible choices: " + favColor).toLocaleLowerCase();

while (counter < tries) {
    if (guessColor !== 'green') {
        guessColor = prompt("Sorry, wrong answer. Please guess my favorite color? Possible choices: " + favColor).toLocaleLowerCase();
        counter++;
    } else {
        alert('That is correct!')
        ++correctGuess;
        counter = 7;
    }
}

// Final message to user
alert('Goodbye, hope you learned a little about me. You got ' + correctGuess + ' out of seven correct!!!')
