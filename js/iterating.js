/** (function(){   */
    "use strict";

//--------Counting array example----------
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// console.log(shapes.length); // 4

//--------Accessing Array Elements Example----------
// var numbers = [1, 2, 3, 4];
// console.log(numbers[0]); // 1
// console.log(numbers[1]); // 2
// console.log(numbers[2]); // 3
// console.log(numbers[3]); // 4
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// console.log('There are ' + shapes.length + ' shapes in the array');
// console.log('The first shape is: ' + shapes[0]);
// // The first shape is: square
//
// console.log('The second shape is: ' + shapes[1]);
// // The second shape is: rectangle
//
// console.log('The third shape is: ' + shapes[2]);
// // The third shape is: circle
//
// console.log('The fourth shape is: ' + shapes[3]);
// // The fourth shape is: triangle
//
// console.log('The fifth shape is: ' + shapes[4]);
// // The fifth shape is: undefined

//------Iterating Arrays(For Loop), (For-Each Loop)----------

// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// for (var i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// }

// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });

              //-------Manipulating Arrays------//
// Adding Elements
// push--adds item to the end of array
// unshift--adds item to the beginning of the array

// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
// console.log(daysOfTheWeek);
// // ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
// console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
   // var names = ['Danny', 'Chris', 'Tobby', 'Will'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // var names = ['Danny', 'Chris', 'Tobby', 'Will'];
    // console.log(names.length);

/**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // var names = ['Danny', 'Chris', 'Tobby', 'Will'];
    // console.log('The first name is: '+ names[0]);
    // console.log('The second name is: '+ names[1]);
    // console.log('The first name is: '+ names[2]);
    // console.log('The first name is: '+ names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // var names = ['Danny', 'Chris', 'Tobby', 'Will'];
    //
    // for(let i = 0; i <= names.length; i++){
    //     console.log('The names of the people in my class are ' + names[i]);
    //     i++;
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
//     var names = ['Danny', 'Chris', 'Tobby', 'Will'];
//     names.forEach(function(names) {
//         console.log('My first classmate is: ' + names)
// })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array*/

    var names = ['Danny', 'Chris', 'Tobby', 'Will'];

    // let name1 = names[1]

    function first(jello) {
        return names[0];
    }
    console.log(names[0])

    function second(fox) {
    return names[1];
}
    console.log(names[1])

    function last(fish) {
    return names[3];
    }
    console.log(names[3])
     /** Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

/**})();*/