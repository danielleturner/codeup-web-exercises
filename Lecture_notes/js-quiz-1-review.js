//---JS review ---

//declaring objects

// let USA = {
//     Texas: {
//         size: "big",
//         flower: "bluebonnet",
//         bird: "mockingbired",
//         people: 30,
//         addPeople: function () { //nested method this allows you to add to addPeople(inside the texas object). need to write a function that accepts a different number each time
            // let nowPeople = this.people
            // console.log(this.people) //would get variable of 30
//         }
//     }
// }

//// nested objects, object methods, this keyword

// let sirius = {
    //only methods and properties can go in here
    //properties
    // numStudents: 29,
    // city: ["Dallas",
    //     "Houston",
    //     "San Antonio",
    //     ["downton", "rin", "north central", "museum district"],
    // ], //to get to dallas in the array of city you have to console log this ( console.log(sirius.city[0])  Object are accesed through .(period) Arrays are accesed through []
    // inPerson: "false",
    // theBest: "true",

    // methods - storage that stores functions
    // returnCity: function () {
    //     console.log(8+8)
    //     console.log("hello world")
    //     return this.city // San Antonio
//     }
// }
// to find out if sirius in in person
// console.log(sirius.inPerson); // dot notation allows us to go in each layer of the object
// console.log(sirius.returnCity());
//this keyword looks in immediate scope. If it's not in that scope it goes to the scope above it.


//Arrays

// let cities = [
//     {city: "San Antonio", people: 30, isGreat: true, team: "spurs"},
//     {city: "Dalla", people: 30, isGreat: true, team: "mavericks"},
//     {city: "Houston", people: 30, isGreat: false, team: "rockets"},
//     {city: "Austin", people: 30, isGreat: true, team: "keepItWeird"}
// ]
//
// //loop through each array to see if the city isGreat//
// cities.forEach(function (ci){
//     console.log(cities[4].people)
// })

// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// || or
// && and
// == checks value
// === checks value and type




// loop through array using forEach
// check something --> conditional statement (if/else)
// charAt()
// how to find out if the first letter is a string
// check if first letter of a team is "r"

// let sports = ["spurs", "mavericks", "rosters","bucks"];
//
// sports.forEach(function(team){
//     let firstLetter = team.charAt(0);
//     console.log((firstLetter))
//     if(firstLetter == "r"){
//         console.log("yes, the team name starts with the letter R")
//     }else {
//         console.log("nope, team name doest start with the letter R")
//     }
//
// })

band.shred = function() {
    console.log('RAAAAAAAAAA!!!!');
}
band.shred();