//change the span to say different name(input)

// var prompAnswer = prompt('What is your name?');
//
// var retrievedSpan = document.getElementById("name")
//
// console.log("promptAnswer: ", prompAnswer);
// console.log("retrievedSpan: ", retrievedSpan);
// retrievedSpan.innerHTML = prompAnswer;

// --
// document --> used to access information inside the html
// getelementById() --> grabs the id with the related name
// getElementByClass()
// getElementByTagName()

var weather = prompt("What is the weather like?")

var retrieveWeather = document.getElementById("weather")


console.log("weather: ", weather);
retrieveWeather.innerHTML = weather
