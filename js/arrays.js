/**--------Laura's Class Examples ------*/

// let students = ["danny", "chris", "bob", "bubba", "justin", "Mina"];
// console.log(students.length)
// console.log(students[3])
//
// console.log(students[4]);
// students[4] = students[4] + ' Sebastian'
// console.log(students[4]);


// let favoriteFood = ["RedBeansAndRice", "Chicken", "catfish", "cornBread", "potatoSalad"];
// console.log(favoriteFood)
//
// console.log(favoriteFood[0] + ' rated #1')
//              console.log(favoriteFood[1] + ' rated #2')
//              console.log(favoriteFood[2] + ' rated #3')
//              console.log(favoriteFood[3] + ' rated #3')
//              console.log(favoriteFood[4] + ' rated #4')
//              console.log(favoriteFood[5] + ' rated #5')

// let students = ["danny", "chris", "Mina", "bubba", "justin", "Mina"];
// let indexOfMina = students.indexOf("Mina");
// console.log(students.indexOf("Mina"));
// let otherIndexOfMina = students.lastIndexOf('Mina')
// console.log(otherIndexOfMina);


//Methods
//ACCESSING Elements from an array
//nameOfARRay[position within the array] arrays always start at zero
//accessing array returns the value inside of that position
// let valIndexZero = students[0];
// console.log(valIndexZero)

// let laura = ['Laura', 31, 'San Antonio', 'mac', ['pizza', 'french fries', 'ice cream'], 2021]
// let age = laura[1];
// console.log(age);
// let innerArr = laura[4];
// console.log(innerArr);
// console.log(innerArr[1])
//
// //to find a value in the array
// let indexOfAge = laura.indexOf(1)
// console.log(indexOfAge)

// function nameOfFunction(num1, num2){ ////() at top are parameters
//     return num1 + num2;
// }
// console.log(nameOfFunction(4,5)); ////() at bottom are called arguments
//
// //METHODS
// // methods are basically pre-existing functions
// Math.random() // generates a random number between 0 and 1 (.random is the method)
// console.log('Print this out') // another type of method     (.log is the method)
//
// function nameOfFunction(num1, randomFunction,) { ////() at top are parameters
//     console.log("doing background task");
//     randomFunction();
//     return num1;
// }
// console.log(nameOfFunction(4,function () {
//     console.log('hey, there')
// }))

//FUNCTIONS
// function sayHello(){
//     console.log('say hey!');
// }
// function nameOfFunction(num1, randomFunction){
//     console.log("doing background task");
//     randomFunction();
//     return num1;
// }
// console.log(sayHello);

// let ages = [14, 23, 89, 5, 25, 36]
// for(let i = 0; i <= ages.length - 1; i++) {
//     console.log(ages[i] * 2);
// }