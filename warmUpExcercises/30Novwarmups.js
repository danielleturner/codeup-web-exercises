//Write a function that accepts the top three bowling scores
// and returns the average.


function topThreeNumbers(x, y, z) {
    let average = 0;

    average = (x + y + z) / 3;

    return(average);
}
console.log(topThreeNumbers(9, 5, 6))

let first = 120;
let second = 221;
let third = 25;
function getAverage(score1, score2, score3){
    let average = (score1 + score2 + score3) /3;
}
console.log(getAverage(first, second, third));

// Write a function that accepts the best score
//  if its divisible by 3 or 5 and
//  false if it’s not
//  returns true
function bestScore(a){
    if(a % 3 == 0) || (a % 5 == 0)
        return(true)
    else
        return(false);
}

//Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”)
// and returns it in all lower case
// BONUS: return it with a space between each word

function bowlingPlace(name) {
   return(name.toLowerCase())
}
console.log(bowlingPlace("ThEbEsTbOwLiNgPlAcEever"))


// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”];
// Write a function that returns the type of each of the variables (call the function once per variable);
// Write a function that executes all of the above functions

let score = 109;
let name = "Bowling is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"]

function whatIsIt() {
    console.log(typeof score)
    console.log(typeof name)
    console.log(typeof isBowlingFun)
    console.log(typeof players)
}

console.log(typeof(name))

let a = 109;
let b = "Bowling is Fun";
let c = true;
let d = ["tom", "jerry", "Garfield"]

function executeAll(a, b, c, d){
    return(typeof a + typeof b + typeof c + typeof d)
}
console.log(executeAll(109, "Bowling is Fun", true, "tom, jerry, Garfield"))
// Copy and execute the following functions, and find the Error: (Hint: try console logging the result)

//function myFunction (firstName, lastName) {
//  return firstName + lastName; };

// function thatsNotMyName(name){
//  if(name = "Laura"){ return "that's me!, I'm " + "name"}
// } else { return "that's not my name" }

function thatsNotMyName(name){
    if(name = "Laura")
        return("that's me!, I'm " + "name")
}else{
    return "that's not my name";
}