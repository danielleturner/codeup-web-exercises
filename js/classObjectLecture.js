 /** Object Lecture & Examples */
// console.log("Welcome to object")
// let person = {} // to declare an object
// let person = new Object(); //another way to declare an object
//
// let array = [1,2,3,4,5]

// let person = new Object{}

// let person = {}
//
// person["name"] = "Matt Lewis";
// person.birthday = "Sep, 22";
// person.isTall = true
//
// console.log(person)
// //
// // let person2 = {
// //
// //     // person: "Matt Lewis";
// //     // birthday: Sep, "22":
// //     // isTall: true;
// // }
//
// let birthdayObject = { //function inside an object
//     month: "November", // use this.xxx to call a particular piece of information within the object itself.
//     day: 22,
//     getDetails: function (){
//         return this.month, + "," + this.day
//     }
// }
//
// function createPerson(name){
//     return {
//         firstName: name,
//         greetings: function () {
//             console.log()
//         }
//     }
// }

 let dog = {
     breed: "Huskey",
     colors: ["brown", "black", "white"],
     sex : "f",
     name: "Fido",
     isFloofer: true,
     bark: function (){
         if (loud)
         console.log("Woof Woof")
         else {
             console.log("ruff ruff")
         }
     },
     getDetails: function (){
        return this.colors[0] + "" + this.breed +  " named " + this.name;
     }
 };

 // console.log(createPuppy("Terri", ["brown", "grey"], "Wolf Dog"))