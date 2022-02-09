

//
// function getOccurrence(array, value) {
//     return array.filter((v) => (v === value)).length;
// }
//
// console.log(getOccurrence(myInput,2))
// console.log(getOccurrence(myInput,3))
// console.log(getOccurrence(myInput,5))


  // Expected output  [2,3,5,8,1,6,7,4]

let myInput = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
let outPut = [];

// creat array
// now i'm going to loop throught using a for loop
// for each number int the array if it appears twice
// I want to log it once

for (var i = 0; i < myInput.length; i++){
    // console.log(myInput)
   if(!outPut.includes(myInput[i])){
       outPut.push(myInput[i])
   }
}
console.log(outPut)
