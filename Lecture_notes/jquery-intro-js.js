//19 Jan Jquery lecture
// document.getElementById("heading") //DOM
//
//
//
// // jquery
// let myEl = $("#p-one");
// console.log(myEl)
//
// let heading = $("#heading").text();
// console.log(heading)
//
// console.log($("#heading").html());
//
// // add a class of border to my p tag
//
// $("#p-one").addClass("border")


// add a border to the heading if user is logged in:
// check the value of isLoggedIn
//grab the value of isLoggedIn
// save that value to a variable
// compare value of logged in to true
// add a border
// assign a class to the elemnt, if true

// let user1 = {
//     name: "laura",
//     isLggedIn: false,
//     age: 31
// }
//
// let loginStatus = user1.isLggedIn;
//
// if(loginStatus === true) {
//     $("#heading").addClass("border")
// }


//20 Jan Jquery lecture

//look for all elments that have a class of blue backgorund and change background to blue
// $(".blue-bg").css("background-color", "blue" )

//to change only list items
// $("li").css("font-size", "24px");

//to change the last li
// let lastLi = $("ul li:nth-child(3)".text())

// to change css properties on one element
// $("#p-one").css({"color": "red", "font-size": "12px"})

// style different element on different lines
// $("p, ul, li").css("border", "4px solid blue")

// to change all items on the page
// $("*").css("background-color", "blue")

// $("") --> sellects elmemnts from the DOM
// # --> for id
// element/tag name --> element/tag
// , --> select multiple elements
// :nth-child(n) --> allows you to select a child element at the end place from the parent or selected element
// .method().method().method()--> method can be chained to gether
// .method(params) --> some methods accept one or more parameters

// css("property", "value") //accepts two parameters
// .val() // accepts one parameters
// .text(optionalParam) accepts one parameters