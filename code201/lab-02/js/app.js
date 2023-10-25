'use strict';

alert('Hello, Please answer the following question Yes or No.');


let myName = prompt('Is my name Brett?');
let uppercaseName = myName.toUpperCase();
console.log(myName);
console.log(uppercaseName);

//Responed back to the user if they are correct on my name
 
if (uppercaseName === 'YES') {
    alert('You are correct!!!');
} else {
    alert('You do not know Brett!!!')
}

// Ask the user if I'm old?

let myAge = prompt('Am I a old man?').toUpperCase();

// Respond back to the user if they are correct on myAge question.

if (myAge === 'YES') {
    alert("No, I'm still young at heart.");
} else {
    alert("Very good answer... I still look good.")
}

// Ask user is I was in the Air Force
let myCareer = prompt('Was I in the Air Force?').toUpperCase();

// Respond back if they got my Air Force correct
if (myCareer === 'YES') {
    alert("Correct, I was in the Chair Force as some would say.");
} else {
    alert('Incorrect, I was in the Air Foce. I miss being able to see the world!!!')
}

// Ask user the reason for taking this class
let myGoal = prompt("Is the reason I'm taking this class to make more money?").toUpperCase();

// Responed back if user was correct on reason for why I'm taking the class
if (myGoal === 'NO') {
    alert("Correct, I'm taking this class to further my education into the Software Development Career Field.");
} else {
    alert("Incorrect, some what. More money is nice but not the main reason I'm taking this class.");
}

let myHobby = prompt('My favorite hobby is to snowboard?').toUpperCase();

// Respond to the user if they are correct on my Hobby
if (myHobby === 'YES') {
    alert('Incorrect... My favorite hobby is skiing but I have taken up snowboarding');
} else {
    alert("Correct. I can not wait for the ski season to start but I'll miss some of it while being in this class.");
}
