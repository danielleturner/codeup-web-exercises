/** While Loops, Do While Loops & For Loops*/


                                            //--WHILE LOOOPS--



                                            /**Example 1*/
//  var i = 0;
//
//  while (i < 10) {
//      console.log('while loop iteration #' + i); //While loops executes 1-9 and stops at 9 because 9 < 10: [example 1 then loops to 2 then loops to 3 and so on to 9 and stops at 9]
//      i++;                                       //to stop a command from executing you can press q or control c
// }


                                            /** Example 2*/
// var i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// } This will not run because 10 is not less than 10



                                            /** Example #3*/
// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

                                        /** Lauras's Example*/

//50 parking spots
//1 car driving around
// ? how many time welll have to drive around before finding a spot

// while(condition){
//    code here at every iteration
// }
//
// while(car is uparked){
//     keep driving
// }    control c will stop the loop if not close intelij / condition at the end has to meet false for loop to stop

//------------

// let parkingSpots = 20;
// let car =1;
// //if(parkingSpots == 0)
// let isEmpty = false;
//
// let i = 0;
// while(i < 10) {
//     console.log("iteration: ", i); // as long as i < 10 keep looping code
//     i++;
// }

                                        /** Example of ++ */
// let num = 2;
// let age = 31;
// console.log(num = num++); //if ++ is after var num it doesn't increments 1
// console.log(age = ++age); //if ++ is before var age it increments 1
// ++ is increment ad 1
// -- decrement sub 1


                                /** First Example of Loop work through*/

// let availSpots = 0;
// let parkSpots = 20;
// let counter = 0;
//
// while(availSpots == 0) {
//     counter++
//     console.log(counter)
//     if(counter >= 60) {
//         availSpots++;// when car moves
//     }
// };

                            // Example loop until our number reaches 15

// let i = 0;
// while (i <= 15) {
//     console.log('loop number: ' + i);
//     i++;
// }

            /** Do while Loop*/ //executes code before checking the conditiional if true run code again false stop
// let i =20
//
// do {
//     console.log("i before ++i", i)
//     i++;
//     console.log("i after ++i; ", i);
// }while (i <= 15);

                                //loop through number 0 - 50 by 2s

// var i = 0;
//
// do {
//     console.log("number is", i);
//     i = i + 2; //now i = 2 and return 2 to var i;
// } while (i <= 50); // while this is true keep going------------ until condition is false then stop


// let i = 10;
//
// do (i <= 10)
//     console.log(i);
//     i++;
// }
// let k = 0
// do  {
//     console.log(k);
//      k++;
// } while (k < 10);




                        //--------------------  Exercises for loops------------//


/** Number 2*/

// function showMultiplicationTable() {
//
//     for (let number = 1; number <= 10; ++number) {
//         let newNum = number * 7;
//         console.log(`7 x ${number} = ${newNum}`);
//     }
// }
// showMultiplicationTable()



/** Number 3*/

// var i = 1;
// for(let i = 1; i < 10; ++i) {
//       let randomNumber = Math.floor(Math.random() *(180) + 20);
//         if(randomNumber%2 === 0) {
//             console.log(`${randomNumber} is even`)
//         } else {
//             console.log(`${randomNumber} is odd`)
//         }
// }

/** Number 4 */

// var s = "";
//
// for(var i = 0; i < 10; i++){ //at end of increment i = 1 and console logs first 1
//     console.log("i is: ", i)
//     for(var c = 0; c < i; c++){
//         console.log("c is: ", c)
//         s += i + "";
//     } s += "\n"
// } console.log(s);

// for(let i = 1; i <= 9; i++){
//     let a = "";
//     for(let k = i; k > 0; k--){
//         a += i;
//     }console.log(a)
// }

/** Number 5 */

// for (var i = 100; i >=5 ; i-=5) {
//     console.log(i);
// }
//
// for (var i = 5; i <= 100; i+=5) {  //book example
//     console.log('for loop iteration #' + i);
// }



/** Slack Question */

// let availSpots = 0;
// let parkSpots = 20;
// let counter = 0;
//
// while(availSpots == 0) {
//     counter++
//     console.log(counter)
//     if(counter >= 60) {
//         availSpots++;// when car moves
//     }
// };


                                    /** Slack Challenge*/


// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.







// let pwd = "nopassword"; // password
//
// let input = prompt('Please enter your password') //this will prompt and store the password into the variable input
//
//  while(pwd !== input) { // here comparing password
//      alert('Your password is incorrect'); //if password don't match
//      input = prompt("Please renter you password"); // storing password from the prompt
//      if(pwd === input){
//          alert('Thank you')
//      }else {
//          alert('Try again later')
//      }
//  }


                                /** FOR LOOPS INSTRUCTIIONS---- */

// for(1: 2; 3;){
//     //code;
// };

// 1. starting point
// 2. stopping point/condition
// 3. how to iterate

                                /** Example to study*/
        //1   |  2   |   3  to iterate through number of 2 use i+=2/ to iterate through by numbers of 3 use i+=3
// for(let i = 0; i <=15; i++) {
//     console.log("my favorite number is: " + i);
// }


                                    /**egg example*/
// let dozens = 0;
// // want to do 4 dozen eggs
//
// for(let eggs = 0; eggs <= 48; eggs++) {
//     dozens = eggs/12;
//     console.log("dozens", dozens);
//     console.log("eggs: ", eggs);
// }


                                    /** NESTED LOOPS*/

// for(let counter = 1; counter <=5; counter++) {
//
//     console.log('FIRST counter: ' + counter);
//     //counts from 5 to 1
//
//     for (let counterTwo = 5; counterTwo > 0; counterTwo--) {
//         console.log('SECOND counter: ' + counterTwo);
//     }
// }