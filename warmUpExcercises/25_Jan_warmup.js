/**25 January warmUp exercise*/

/**Write a function that returns an object displaying any number/letter that appears consecutively in a string of numbers. The object should display how many times that letter/number appears consecutively
INPUT: “42992338111134”
EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}
---
    INPUT: “BQAAIPPPPFFA”
EXPECTED OUTPUT: {a: 2, p: 4, F: 2} (edit */

var stringCount = "42992338111134";

function letterCount(string) {
    var stringObject = {};
    for (var i = 0; i < string.length; i++) {
        stringObject[string[i]] = ((stringObject[string[i]]) ? stringObject[string[i]] : 0) + 1;
    }
    return stringObject;
}

console.log(letterCount(stringCount));