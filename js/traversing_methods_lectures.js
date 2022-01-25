/** Traversing Methods**/
//finding elements over the DOM
$("pink").next().css("border", "2px solid green")

// $("#first").children().children().css("border", "2px solid red")

$("first").children(":nth-child(1)").css("border", "2px solid red")

$('li').each(function(index) {
    if (index % 2 !== 0) {
        $(this).css('background-color', '#FF0');
    }
});