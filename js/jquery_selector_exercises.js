// Id Selectos
// this jquery function selects items in id(p-one)

// var contents = $("#p-one").html();
// alert(contents);

// var second = $("#list").text();
// alert(second);

//when selecting items with the same id jquery renders changes to the first one top to bottom

//Class Selectors

// $(".codeup").css("border", "1px solid red")

// Element Selectors
// $("li").css("font-size", "20px")
//
// $("h1, p, li").css("background", "green")

// var third = $(".p-one").html();
// alert(third)

//Multiple Selectors
// $("*").css("border", "1px solid red");


// heading change colors on click
$(".heading").click(function (){
    $(".heading").css("color", "red")
    // alert('Color has changed')
})

// double click all paragraphs turn to 18px

$(".p-one").dblclick(function (){
    $(".p-one").css("font-size", "18px")
})

// li to red on hover
// $("li").hover(function (){
//     $(this).css('background-color', 'red')
//     $("li").click(function (){
//         $(this).css('background-color', 'white')
//     })
// })

// this method allow me to click once and light the li item up as red
// it also allows me to dblclick
$("li").click(function (){
    $(this).css('background-color', 'red')
    $("li").dblclick(function (){
        $(this).css('background-color', 'white')
    })
})