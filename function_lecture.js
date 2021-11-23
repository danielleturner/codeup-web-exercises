function tryToGetADrink(isAtBar, bac, age, cashOnHand) { // the function definition contains parameters

    let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

    if (canHaveADrink) { // true or false
        console.log("Have a brewski my dude!");
    } else { // it was not true
        console.log("Sorry buddy, no brew for u");
    }

}

tryToGetADrink() //when you CALL (invoke) the function, you pass ARGUMENTS*/


//Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
//If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly

function timeToFly(cloudyDay, totalFlights) {
    if (!cloudyDay && totalFlights < 10) {
    console.log("It's a good day to fly!")
    } else {
        console.log("Negative ghost rider")
    }
}

timeToFly(false, 6)

/*function setSail(calmSeas, clearSkies) {
    if (setSail == clearSkies)
        console.log("Fair Winds and Following Seas")
    }else{
    console.log("I hope you brought swimming gear!")
    }*/


/*write 4 functions which each take in two parameters and return a number.  They will, respectively:
Return the sum of two numbers
Return the difference of two numbers
Return the product of two numbers
Return the dividend of two numbers*/

function add(a, b){
    return a + b;
}
console.log(add(10, 12));

//Return the difference of two numbers
function difference(c, d){
    return c - d;
}
console.log(difference(493, 212));

//Return the product of two numbers
function multiply(e, f){
    return e * f;
}
console.log(multiply(77, 5))

//Return the dividend of two numbers
function divide(g, h){
    return g, h;
}
console.log(divide(500, 21))

//Return the remainder of two numbers
function remainder(i, j){
    return i % j;
}
console.log(remainder(5, 9));
