'use strict';

// Adding a value to track the number of correct answers to my questions:
let correctGuess = 0;

// Greeting and getting user name
let userName = prompt('Hello, what is your name?');
alert("Hello, " + userName + ". Please answer the following question either Yes, No, Y or N.");

// Answer for guessing Game.
const answerYes = ['YES', 'Y'];
let answerNo = ['NO', 'N'];


// Question #1. Asking the user if they know my name. 
let myName = prompt('Is my name Brett?, Yes or No?');
let uppercaseName = myName.toUpperCase();

//Responed back to the user if they are correct on my name
if (uppercaseName === answerYes[0] || uppercaseName === answerYes[1]) {
    alert('You are correct!!!');
    ++correctGuess;
} else if (uppercaseName === answerNo[0] || uppercaseName === answerNo[1]) {
    alert('You do not know Brett!!!');
} else {
    alert('Sorry Incorrect response...')
}

// Question #2. Ask the user if I'm old? 
let myAge = prompt('Am I a old man?').toUpperCase();

// Respond back to the user if they are correct on myAge question.
if (myAge === answerYes[0] || myAge === answerYes[1]) {
    alert("No, I'm still young at heart.");
} else if (myAge === answerNo[0] || myAge === answerNo[1]) {
    alert("Very good answer... I still look good.");
    ++correctGuess;
} else {
    alert('Sorry, Incorrect response...');
}

// Question #3. Ask user is I was in the Air Force
let myCareer = prompt('Was I in the Air Force?').toUpperCase();

// Respond back if they got my Air Force correct
if (myCareer === answerYes[0] || myCareer === answerYes[1]) {
    alert("Correct, I was in the Chair Force as some would say.");
    ++correctGuess;
} else if (myCareer === answerNo[0] || myCareer === answerNo[1]) {
    alert('Incorrect, I was in the Air Foce. I miss being able to see the world!!!');
} else {
    alert('Sorry, Incorrect response...');
}

// Question #4. Ask user the reason for taking this class
let myGoal = prompt("Is the reason I'm taking this class to make more money?").toUpperCase();

// Responed back if user was correct on reason for why I'm taking the class
if (myGoal === answerNo[0] || myGoal === answerNo[1]) {
    alert("Correct, I'm taking this class to further my education into the Software Development Career Field.");
    ++correctGuess;
} else if (myGoal === answerYes[0] || myGoal === answerYes[1]) {
    alert("Incorrect, some what. More money is nice but not the main reason I'm taking this class.");
} else {
    alert('Sorry, Incorrect response...');
}

// Question #5. Ask what is my favorite hobby.
let myHobby = prompt('My favorite hobby is to snowboard?').toUpperCase();

// Respond to the user if they are correct on my Hobby
if (myHobby === answerYes[0] || myHobby === answerYes[1]) {
    alert('Incorrect... My favorite hobby is skiing but I have taken up snowboarding');
} else if (myHobby === answerNo[0] || myHobby === answerNo[1]) {
    alert("Correct. I can not wait for the ski season to start but I'll miss some of it while being in this class.");
    ++correctGuess;
} else {
    alert('Sorry, Incorrect response...');
}

// Question #6. Guess my Age question with parseInt converting the string to an integer.

let attemps = 4;
let userGuess;

while (attemps > 0) {
    // prompt the user to guess 
    userGuess = parseInt(prompt('Please try and guess how many animals I have at home?'));

    // Check if they guess correctly
    if (userGuess === 10) {
        alert('Correct! I have two dogs and eight ducks.');
        ++correctGuess;
        break;
    } else if (userGuess > 10) {
        alert("To high!, try again");
    } else if (userGuess < 10) {
        alert("Too low! Try agian.");
    } else {
        alert("Sorry, invalid repsonse!!! Try again.")
    }
    attemps--;
}

if (attemps === 0) {
    alert('Sorry, you used up your four attempts. The correct answer was 10.');
}



// Question #7. Question that has multiple possible correct answers stored in an array

let favColor = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink']
let counter = 6;
let questionSeven = ("Please guess my favorite color? Possible choices: " + favColor);

function favoriteColor(correctResponse) {
    let guessColor = prompt(questionSeven).toLocaleLowerCase();

    while (counter > 0) {
        if (guessColor !== 'green') {
            guessColor = prompt("Sorry, wrong answer. Please guess my favorite color? Possible choices: " + favColor + " You have " + counter + " left..").toLocaleLowerCase();
            counter--;
        } else {
            return('That is correct!');
            counter = 10;
        }
    }

    if (counter < 6) {
        return('Sorry, you ran out of tries...');
    }

}


let result = favoriteColor("green");
console.log(result);

if (result === "That is correct!") {
    alert(result);
    ++correctGuess;
} else {
    alert('Sorry, that is incorrect.');
}



// Final message to user
alert('Goodbye, hope you learned a little about me. You got ' + correctGuess + ' out of seven correct!!!');


