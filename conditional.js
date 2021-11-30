"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so*/

/**function anaylzeColor(string){
    if(string == 'red'){
        return 'The color is Red'
}else if(string == 'blue'){
        return 'The color is blue'
    }else if(string == 'green'){
        return 'The color is blue'
    }else if(string == 'purple'){
        return 'The color is purple'
    }else if(string == 'lavender'){
        return 'The string is lavender'
    }else{
        return 'I don\'t know?'
    }
}
console.log(anaylzeColor('lavender'));

/** Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

/**var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function anaylzeColor(string){
    if(string == 'red'){
        return 'The color is Red'
    }else if(string == 'blue'){
        return 'The color is blue'
    }else if(string == 'green'){
        return 'The color is blue'
    }else if(string == 'purple'){
        return 'The color is purple'
    }else if(string == randomColor){
        return 'Guess a color'
    }else{
        return 'I don\'t know?'
    }
}
console.log(anaylzeColor(randomColor))*/



/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
//var person = prompt("Pick your favorite color");
//alert('Your favorite color is')

/**function analyzeColor(string){
    if(string == 'red'){
        return 'The color is Red'
    }else if(string == 'blue'){
        return 'The color is blue'
    }else if(string == 'green'){
        return 'The color is blue'
    }else if(string == 'purple'){
        return 'The color is purple'
    }else if(string == randomColor){
        return 'Guess a color'
    }else{
        return 'I don\'t know?'
    }
}
console.log(analyzeColor(person))
console.log(prompt("Pick your favorite color"))*/

//let sign = prompt("Pick your favorite color");
//alert("Wow! " + sign + "that is my favorite color too!")
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.*/

/**function calculateTotal(number){
    if(number == 0) {
        return "You don't get a discount"
    }else if(number == 1) {
        return "You get a 10% discount"
    }else if(number == 2) {
        return "You get a 25% discount"
    }else if(number == 3) {
        return "You get a 35% discount"
    }else if(number == 4) {
        return "You get a 50% discount"
    }else(number == 5);
        return "You get everything free"
}
console.log(calculateTotal(5))

 /** Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var randomNumber =['1', '2', '3', '4', '5'];
//var luckyNumber = Math.floor(Math.random() * 6);

//prompt("What is your total bill? Round to the nearest dollar!")

//function calculateTotal(number) {
   //alert("Your lucknumber is" + luckyNumber + "Your price was " + prompt() + "Now it's " + calculateTotal() + "- discount of " + randomNumber)
//}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:*/



//alert("Would you like to pick a number?")
//prompt("What is your number?")
//prompt("Ok pick a number wise guy")
//alert("Really")
//prompt("Just pick a number already!!")



//prompt("Would you like to enter a number?")
//if(prompt || false)
  //  alert("Please pick a number sir or maam")
//(prompt("Can you pick a number now?"))
//if(prompt !== true)
 //   alert("Thank You")

//alert("Would you like to pick a number?")
//prompt("What is your number?")
//prompt("Ok pick a number wise guy")
//alert("Really")
//prompt("Just pick a number already!!")


/** * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 */

function enterNumber() {
    prompt("Pick a number")
   if(false == prompt())
        return "Pick a number please"
}
console.log(prompt())

 /** Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type
 */





//function enterNumber() {
 //   if(false == prompt())

//}
//console.log(prompt())
 /*
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */