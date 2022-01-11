// 'use strict';

// let sirius = {
//     numStudents: 30,
//     classroom: "Pedernales/remote",
//     // methods - functions stored inside of an objet
//     takeAttendance: function (){
//         prompt("How many students?")
//         return this.numStudents;
//     },
//     prompt: function () {
       // returns prompt window;
//     }
// }
// sirius.takeAttendance();
// .prompt()


// let BOM = {
//     window: {
//         currentPage: "ww.google.com",
//         prevPage: "www.facebook.com",
//
//     },
//     setInterval: function ( {
//         set the interval
//                             })
// }
var favoriteNumber = 18; //global scope

function add(num1){
    var num2 = 10; //not glogal scope
    return num1 = num2;
}
console.log(add(favoriteNumber));

let name = prompt("what is your name?");
console.log("your name is : " name)

let absent = prompt("How many student are in your class");
