// $.ajax("https://dog.ceo/api/breeds/image/random")
//
//
// console.log($.ajax("https://dog.ceo/api/breeds/image/random"))
//
//
// $.ajax("url",);
//
// $.ajax("url",{
//
// })


// GET REQUEST
/**shortcuts for get --> $.get("") --> $.ajax(url)*/
/**shortcuts for post --> $.post() --> $.ajax(url, option)*/
/** Steps below**/
//select element to change
// change its src attribute and give it a value
// let imgStr = ""; // declare an empty variable to put the data.message value in it another way to do it.


// $("#doggo").attr("src", "???")
//retrieve data from the api
// $.ajax("https://dog.ceo/api/breeds/image/random"); // this sends the request

//now we have to catch the response
// $.ajax("https://dog.ceo/api/breeds/image/random").done()// add .done after the url removing the semicolon

//.done acceptes a function as a paramater so pass in a function in the .done
// $.ajax("https://dog.ceo/api/breeds/image/random").done(function (data, status){ //done function accepts data and status values
    // console.log(data.message); //link string retrieved "data.message" into value of source being chaged --> in line 21
    // $("#doggo").attr("src", data.message)
    // console.log(status);
// })//we can also chain another function to say if it fails
    // .fail(function (){
    //     console.log("something went wrong")
    // })

// POST REQUEST FORMULA
// $.ajax("https://dog.ceo/api/breeds/image/random", {
//     type: "POST",
//     data: {
//         message: "https://dog.ceo/api/breeds/image/random"
//     }
// }).done(function (data, status){
//     console.log("request successful")
// }).fail(function (data, status){
//     console.log("request failed")
// })

$.get("https://jsonplaceholder.typicode.com/posts")
    .done(function (data){
        console.log(data);
        // --> confirm if it's an object or an array
        //HERE WE HAVE ACCESS TO THE DATA RETURNED
        // Now loop through data returned using .each (which I know is an array from
        //  console logging it)
        $.each(data, function (i, comment){
            console.log(comment);
            let newEl = `<h1>  ${comment.title} </h1>` // the two little dots are string literals using "backticks"
            // if undefiend make sure you are calling the right ame in the object
            // select element we're appending to,
            // append going to add whatever we pass in as a child
            // elements to the elements selected
            // now I need to make a variable to store the new element
            $(".container").append(newEl)
        })
    })