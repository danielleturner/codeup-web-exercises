/*var a = 1;
console.log(a);

var b = a++;
console.log(b);

var c = ++a;
console.log(c);

var d = "hello";
d++;
console.log(d);

var e = false;
e++;
console.log(e);

var perplexed;
perplexed + 2;
console.log(perplexed);

var price = 2.7;
price.toFixed(2);
console.log(2);

var price = "2.7";
price.toFixed(2);
console.log(2);
*/

/*
console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

/*console.log(Nan == Nan);*/
/*
console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

*/

var sample = "Hello, Codeup";
console.log(sample.length);

console.log(sample.toUpperCase());

var samples = /Hello, Codeup/i;
console.log(sample.replace(samples, 'Hello Code Up Students'));

"c".indexOf("");
console.log("");

"C".indexOf("");
console.log("");

//    Find the index of "c" using .indexOf(). What do you observe?

//    Find the index of "C" using .indexOf().

//    Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().

//Exercise 3
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
console.log(littleMermaid + 3);
console.log(brotherBear * 5);
console.log(hercules * 1);

var google = 400;
var amazon = 380;
var facebook = 350;
console.log(google + 6 + amazon + 4 + facebook + 6);

var isNotfull = true;
var doesNotConflict = true;

if (isNotfull && doesNotConflict){
    console.log("Welcome to Class!")
}else{
    console.log("You are not welcome!")
}




//Ex4
var username = 'codeup';
var password = 'notastrongpassword';
//console.log( password.length >= 5);
if(password.length >= 5){
    console.log('true')
}else{
    console.log('false')
}

//console.log(password.replace(username, "") == password);
if (username.includes(password)) {
    console.log(false)
} else {
    console.log(true)
}

console.log(username.length <= 20);
console.log(username.trim() == username);
console.log(password.trim() == password);









/*
[Answer from above]
false
false
false
true
false
false
false
false
false
false
true
false
true
false
false
true
true
false
false
false
true
*/