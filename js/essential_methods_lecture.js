/**put border around paragraph*/
// $(".border").css("border", "2px solid red");


/**change h1 to say happy people [Setter and Getters]*/
//grab element
// chain method onto that element
// pass in the value that I want to change
// $("h1").html("Happy Monday");//this is setting html [Setter]
// $("h1").html() // this concept retrieve the value of h1 [Getter]

//add class of border to my h2
// $("#red").addClass("border") // Setter
// $("#red").remove("borer")

//.toggleClass()

// toggle our h1 to be highlighted on an event
// grab element we want to change
// grab element that is listening for the click
// change the css(.css()) method

$("h1").click(function (){
    $("h1").toggleClass("highlight");
})



