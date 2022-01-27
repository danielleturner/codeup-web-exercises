/**when you click on a button, change the background color

//when the page loads, create an alert

//toggle the font size from small to large and back ot small when
  click on that element**/


/**example{
-first element we are going to change identify
element we click on to make the change
what event is going to be listend for
what happens after the event happens
handle the toggle
}**/

// let changeMe = $(".bg");
// let listenin = $("#tgl")
//
// listenin.click(function (){
//     console.log("clicked")
//     changeMe.toggleClass("color")
// })

/**make paragraph disappear and reappear after clicking**/
let changeMe = $(".bg");
let listenin = $("#tgl");

listenin.click(function (){
    console.log("clicked")
    changeMe.toggleClass("hideMe")
})

/**Difference between using dom / jauery**/
//jquery
//  let changeMe = $(".bg");
//  let listenin = $("#tgl")

//DOM
// document.getElementsByClassName("bg");
// document.getElementById("tgl")

/**doc vs load**/

// $(document).ready(function (){
//     alert("almost ready")
// })
//
// window.onload = function (){
//     alert("ready")
// }