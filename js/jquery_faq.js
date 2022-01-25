$("dt").click(function (){
    $("dd").toggleClass("ghost");
})

$("#btn1").click(function (){
    $("ul").children(":nth-child(3)").css("background-color",  "yellow")
})

$("#btn2").click(function (){
    $("ul").children(":nth-child(3)").css("background-color",  "white")
})

$(".wings").click(function (){
    $("#birds").children().css("font-weight", "bold")
})

$(".wolf").click(function (){
    $("#doggo").children().css("font-weight", "bold")
})

$(".water").click(function (){
    $("#sprout").children().css("font-weight", "bold")
})

$("#btn-first").click(function (){
    $("#left").toggleClass("cng1")
})