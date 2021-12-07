/** Math Lecture

console.log("it's Math time")

console.log(Math.random());

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function geetRandomInt(min, max){
    const randomNumber = Math.random() * (max - min) + min

    console.log("before floor || Ceil", randomNumber)

    console.log("after floor", Math.floor(randomNumber))

    console.log("after ceil", Math.ceil(randomNumber))

    console.log("after rounding", Math.round(randomNumber))

    return Math.floor(randomNumber);
}

console.log(Math.pow(8, 2));

console.log(8 ** 2)

console.log("Pi", Math.PI)

console.log("E", Math.E) */

/** Math Exercises */

(function() {
    "use strict";

    // create a circle object

    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            // Math.PI * Math.pow(3, 2);
            // TODO: return the proper value

            return Math.PI * (this.radius ** 2)
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let areaValue;

            if(doRounding){
                areaValue = Math.round(this.getArea())
            }else{
                areaValue = this.getArea();
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + areaValue);
        }
    };   console.log("area", circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();


