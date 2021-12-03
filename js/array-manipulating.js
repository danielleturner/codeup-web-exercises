"use strict"
/** Adding Elements to an Arraay */
let samsDogs = ['blue', 'luna', 'scamp'];

console.log('before', samsDogs);

samsDogs.unshift("Paul");//add element to beginning of array

console.log('after unshift', samsDogs);

samsDogs.push("Fido");// adds element to end of array

console.log("after push", samsDogs)

/** Removing Elements from an Array */

console.log("removing last index");

samsDogs.pop()//removes element from back of array

console.log("after pop", samsDogs)

console.log("running shift message")

samsDogs.shift()//removes element from front of array

console.log("after shift", samsDogs)

console.log("fetching index of \"luna\"..")

console.log("Luna's index ", samsDogs.indexOf("luna"))// getting index of the array thru log

// console.log(
//     "exposure t filter method filtering by letter 'a' "
//
// )
 //-----sliced METHOD---/
// let sliced = samsDogs.slice(1,3) (study more on sliced METHOD)
// console.log("sliced", sliced)

/**REVERSE METHOD*/
// console.log("org", samsDogs)
// console.log("reversing array")
// console.log("reveresed", samsDogs.reverse())--reverses the array

/**SORT METHOD*/
let numbers = [5,72,-5]
console.log(numbers.sort());//---sorting by numeric value
console.log("sort() dogs", samsDogs.sort())
console.log("samsDogs as a string", samsDogs.join("<br>"))// joins elements in array and with <br> in them

/**SPLIT METHOD*/
let searchTerms = "soup,tomato,no-garlic,1Hour"
let parsedSearchTerms = searchTerms.split("")//seperates items by the comas--if  empty string will seperate by letter
console.log("Parsed Search Terms", parsedSearchTerms)
//output
// Parsed Search Terms [
//     's', 'o', 'u', 'p', ',', 't',
//         'o', 'm', 'a', 't', 'o', ',',
//         'n', 'o', '-', 'g', 'a', 'r',
//         'l', 'i', 'c', ',', '1', 'H',
//         'o', 'u', 'r'
//     ]






let myName = "Danielle";

console.log("flipped Name", myName.split("").reverse().join(""))
//output  elleinaD
console.log([...samsDogs, ...numbers]);
//output  [ 'blue', 'luna', 'scamp', -5, 5, 72 ]

