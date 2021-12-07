/**You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay
 */
var movie1LittleMermaid = 3
var movie2BrotherBear = 5
var movie3Hercules = 3

console.log(movie1LittleMermaid*(3), ('dollars for little mermaid'))
console.log(movie2BrotherBear*(3), ('dollars for brother bear'))
console.log(movie3Hercules*(3), ('dollars for hercules'))

/**Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350. ' +  'How much will you receive in payment for this week?
You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/

var google = 400
var amazon = 380
var facebook = 350

console.log(google*(6), ('pay for week at google.'))
console.log(amazon*(4), ('pay for week at amazon'))
console.log(facebook*(10), ('pay for week at facebook'))

/** A student can be enrolled in a class only if the class is not full and
the class schedule does not conflict with her current schedule.*/


let classmax = true;
let noconflict = true;

if (classmax  &&  noconflict){
    console.log('Yaay I can get my degree')
}else{
    console.log('Nooooo what should I do!')
}

/**A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products.*/

let buytwo = true
let offernotexpired = true
let premimember = true

if (buytwo && offernotexpired) {
    console.log('You get a product offer!')
}else{
    console.log('Try again muf*cka')
}if (premimember){
    console.log('You get to pass go and collect 200 dollars!')
}else{
    console.log('Try again muf*cka')
}
//////////////////////////////////////////
var username = "codeup"
var password = "notastrongpassword"

console.log(password.length >= 5)
if(password.length >= 5){
    console.log('true')
}else{
    console.log('false')
}

//console.log(password.replace(username, "") == password);
if (username.includes(password)) {
    console.log(true)
} else {
    console.log(false)
}

console.log(username.length <= 20);
console.log(username.trim(), username);
console.log(password.trim(), password);
