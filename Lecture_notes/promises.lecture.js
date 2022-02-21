/*** Promises */

//  a js object, used a s a placeholder, used often with requests

// function add(a, b){
//     return a = b;
// }
//
// add(4,6); // trigger immediately once it's called

// $.ajax("\"https://api.github.com/zen\"")
// .done(function (res){
//     console.log(res);
// }) //waits for the response before it trigger executed

// similar to a conditional, in that a function will not run unless x
// condition(typically timely condition) is ready

/*** PROMISE STATES: */
// Pending - means waiting for a response/ waiting for a condition to be met
// resolved - when the condition that we are waiting for is successfully met - your resolved function will execute now
// rejected - when the event happens, but the condition is not met successfully, fails -- triggers the function that is going to handle the failed error

/** Fetch Request */
// comes from FETCH API - doesn't have to be embedded into our code in order to use

//let's make a get request using FETCH API
//  fetch("https://api.github.com/zen") // this makes the request // send ifo to make request
     //how can we handle the response. we have to use the .then(function(response){ console.log(res)}
     //console.log(res)
// .then(function (res){
//     console.log(res)
// })
// handles the response and excepts up to 2 paramaters
// 1 - callback function --> get exexcuted only when the request comes back succesfully --state of promise resolved
// 1 --> always going to accept the successful response object from the request as a parameter
// 2 - callback unction --> gets executed only if the tequest is made but fails --> state of promis = rejected
// 2 --> accepts error or failed response

// fetch("https://www.boredapi.com/activity")
//     .then(function (data){
//         console.log(data)
// })

// fetch("https://www.boredapi.com/activity") // for arrow function if you have more than one block of code you need to add curly braces {} in front of the arrow => and between last paranthesis
// .then(res => {console.log(res);
//     console.log(res.body);
//         },
//         function (err){
//             console.log(err)
//         }
//     )


/** Arrow function way **/
// fetch("https://www.boredapi.com/activity")
// .then(res => {
//     console.log(res);;
//     console.log(res.body);
// },
//         err => {
//         console.log(err);
//         console.log('failed')
//     }
//  )

fetch("https://dog.ceo/api/breeds/image/random") // makes request
    .then(res => { // if succesful response obeject become the parameter for the callback function in the .then() method
        console.log(res)
    })
    .then(response =>
        response.json())
    // .then() accepts another callback function, whihc accepts the return item (the result) from the previous chain
    .then(result =>{
        console.log(result)
    })
    .catch(err => { // .catch catches errors that excepts a callback funtion and a parmater which will be the failed error message
        console.log('fishpaste', err)
    })

 //
 // fetch("https://dog.ceo/api/breeds/images/random")
 //   .then(dogs => dogs.json())
 //     // .then() accepts another callback function, whihc accepts the return item (the result) from the previous chain
 //    .then(result =>{
 //         $('#dogg').setAttribute(<source>)
 //     })
 //     .catch(err => { // .catch catches errors that excepts a callback funtion and a parmater which will be the failed error message
 //        console.log('fishpaste', err)
 //    })


    /** PROMISE Object**/

// const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randomNum = Math.random()
//             if (randomNum > 0.5) {
//                 console.log("random number", randomNum);
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 2500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// the way to start a promise is by using the "new Promise" key word that allows us to use the promise method
// must save promise to a variable


/** PROMISE EXAMPLE -1*/
// let myCustomPromise = new Promise(
//     function (resolve, reject){  //callback funtioin: excutor
//         setTimeout(() => {
//             let randomNum = Math.random()
//             if (Math.random() > 0.5) {
//                 console.log("random number", randomNum)
//                 console.log("THIS IS A SUCCESS")
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     }
// )
//
// // .fetch() .then() .catch()
// console.log(myCustomPromise)
// myCustomPromise.then(res => {console.log(res)})
// myCustomPromise.catch(err => console.log(err));



/** PROMISE EXAMPLE -2*/
// const promise1 = new Promise(
//     (resolve, reject) => {
//         resolve("this is confusing")
//         setTimeout(() => {
//             resolve('shucks');
//         }, 3000)
//     }
// );
//
// promise1.then(
//     (value) =>{
//         console.log(value);
//         //expected output: "foo"
//     });

// console.log(promise1)
// expeted output: [object promise]


/** Promise lecture class notes**/

// Promises

// a js object, used as a placeholder , used often with requests

// function add(a, b){
//     return a +b;
// }
//
// add(4,6); // trigger immediately once it's called
//
// $.ajax("\"https://api.github.com/zen\"")
//     .done(function(res){
//         console.log(res);
//     }) //waits for the response before it triggersexecuted

// similar to a conditional, in that a function will not  run unless X
// condition(typically timely condition) is ready

// PROMISE STATES:
// PENDING -waiting for the response/ waiting for the condition to be met
// RESOLVED - when condition waiting for is successfully met - your
// resolved function will execute
// REJECTED -when event happens, but the condition is not meet
// successfully, fails -- trigger the function that is going to handle
// the failed error

// FETCH REQUESTS

// comes from FETCH API - doesn't have to be embedded into our code in
// orer to use

// GET Request using FETCH API

// fetch()
// fetch("https://api.gthub.com/zen") // make the request // send info to
// // make the request
//
// // how do we handle the response? json
// // console.log(res);
//
//     // .then()
//     // handle the response
//     // accepts two parameters
//     // 1 - callback function -> get executed only when the request
//     // comes back successfully --> state of the promise = resolved
//     // 1 -> always going to accept the successful response object from
//     // the request as a paremter
//     // 2 - callbackfunction --> gets executed only if the request is
//     // made but fails --> state of promise = rejected
//     // 2 - accept as a parameter? failed response /  error
//     .then(
//         function (res) {
//         console.log(res);
//         console.log("successful!!")
//         }, // resolved
//         function(err){
//             console.log(err);
//             console.log("failed!!")
//
//         } // rejected
//     )




// // ARROW FUNCTIONS IN FETCH REQUESTS
// fetch("https://www.boredapi.com/activity")
//     .then(function (res) {
//         console.log(res);
//     })
//
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(dogs => dogs.json())
//     .then((res) => {
//         document.getElementById("dog").setAttribute("src", res.message);
//     },
//      (err) => {
//         console.log(err);
//         console.log("failed")
//      }
//  )


// .catch() - handles any rejected response
// accepts a callback function
// that callback function accepts the error message as its paraemter

// fetch("https://dog.ceo/api/breeds/image/random")
//     // ✅ succcessful response object becomes the parameter for the
//     // callback function in the .then() method
//     .then(response =>
//         response.json())
//     // .then() accepts another callback function, which accepts the
//     // returned item (the result) )from the previous chain
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log("error: ", err)
//     })

//
// let myAPIRequest = fetch('https://jsonplaceholder.tyicode.com/todo')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         myAPIRequest;
//     })
//     .catch((error) => {
//         console.error('Error caught in catch method:', error);
//     });



// MARKS COMPLICATED QUESTION ABOUT RECURRSION THAT I COUDLN'T FIGURE OUT
// let number = 0;
// let url = "";
//
// let myTodosRequest =
//     fetch(`https://jsonplaceholder.typicode.com/todos`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         return "hello";
//     })
//         .catch(err => {
//             console.log(err)
//         })
//
// function startApp(fn){
//     fn()
// }
//
// startApp(myTodosRequest);




// CUSTOM PROMISES
// we can create custom promises using the Promise object by
// initializing a new Promise object


// const myPromise =
//     new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let randomNum = Math.random()
//         if (randomNum > 0.5) {
//             console.log("random number: ", randomNum );
//             resolve();
//         } else {
//             reject();
//             console.log("random number: ", randomNum );
//         }
//     }, 2500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// custom promise
// instantiate it

// new - new keyword allows us to create a new instance of an object
// template
// let myCustomPromise = new Promise(
//     function (resolve, reject) {
//             setTimeout(() => {
//         let randomNum = Math.random()
//         if (randomNum > 0.5) {
//             console.log("random number: ", randomNum );
//             console.log('THIS IS A SUCCESS')
//             resolve(); // triggering the resolve function
//         } else {
//             reject(); // execute the rejection function
//             console.log("random number: ", randomNum );
//             console.log("THIS IS A FAILURE")
//         }
//     }, 3000);
//     }
// )

// fetch() .then() catch()
// console.log(myCustomPromise)
// myCustomPromise.then(res => {console.log(res)})
// myCustomPromise.catch(err => console.log(err))


// // promise structure, sortA
// function promiseStructure (
//     // callback function: executor
//     function(
//         // 1st param
//         // callback function - resolved
//         function(){},
//         // 2nd param
//         // callback function - rejected
//         function(){}
//     ){
//
//     }
// ){
//     // executor code
// }


// const promise1 = new Promise(
//     (resolve, reject) => {
//         resolve("this is confusing")
//         // setTimeout(() => {
//         //     resolve('foo');
//         // }, 3000);
//
//     }
// );
//
// promise1.then(
//     (value) => {
//     console.log(value);
//     // expected output: "foo"
// });
//
// console.log(promise1);
// // expected output: [object Promise]


//--------------------
// Updating a resource
//--------------------


/***How to do update a request using fetch**/
// where doe  that id go when make a request to delete? at the end of the url
// where do I add the object where i'm changing the specfied thing to? 2 parameter of fetch request.
// option obect which is the sefond parameter to my .fetch() method


/***Below method changes the item being targeted to a variable*/
// let idofThingChanging = 1;
//
// let newObject = {method: 'PUT',
//     body: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,},
//
//
// let  options = {method: 'PUT',
//     body: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,}
//
//             `https://jsonplaceholder.typicode.com/posts/${idofThingChanging}`,

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//
//
// //-------------------
// //DELETE
// //-------------------
//
// /***How to delete a resource**/
//
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });