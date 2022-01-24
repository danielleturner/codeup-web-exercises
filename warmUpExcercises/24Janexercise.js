//PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
//INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
//INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34


sumNumb("4, 2, 9, 5, 8, 3, 7, 2");
sumOtherNumb("9, ")

function sumNumb(str){
    let strArr = str.split(",");
    let sumNumb = strArr.reduce(function(total, num){
        return parseFloat(total) + parseFloat(num);
    });

    return sumNumb;
};