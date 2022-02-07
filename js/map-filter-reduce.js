"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array
let pickedLanguage = users.filter(user => user.languages.length >= 3)
console.log(pickedLanguage)


// Use .map to create an array of strings where each element is a user's email address
let newArray = users.map(users => users.email)
console.log(newArray)


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let experience = [5, 6, 7, 8, 9];

let experienceTotal = experience.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(experienceTotal)
console.log(experienceTotal/experience.length)


// Use .reduce to get the longest email from the list of users.
let email = ['justin@codeup.com', 'fernando@codeup.com', 'zach@codeup.com', 'luis@codeup.com', 'ryan@codeup.com']
// console.log(email)

let chosenEmail = [];

let longestEmail = users.reduce((previousValue, currentValue) => {

    if (previousValue.email.length > currentValue.email.length){
        return previousValue
    } else {
        return currentValue
    }
})
console.log(longestEmail.email)


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let names = ['justin', 'fernando', 'zach', 'luis', 'ryan']
console.log(names)

let namestring = names.reduce((previousValue, currentValue) => {
    return previousValue + " " + currentValue;
}, "")

console.log(namestring)

// Bonus
// Use .reduce to get the unique list of languages from the list of users.

let userinfo =[
    {
        name: 'ryan',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'zach',
        languages: ['javascript', 'bash']
    },
    {
        name: 'fernando',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        languages: ['html', 'css', 'javascript', 'php']
    }
]

console.log(userinfo)

let newinfo = userinfo.map(person => "<li>" + person.name + "</li>" + "<li>" + person.languages + "</li>")
console.log(newinfo)

// let newinfo = userinfo.reduce((previousValue, currentValue) => {
//     return previousValue + " " + currentValue;
//
// }, "")

// console.log(newinfo)


/**Extra exercises*/

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];


// Create an array of the first letters of each fruit

let firstLetter = fruits.map(function (fruits){
    return fruits.charAt(0)
})
console.log(firstLetter)

/*** Create array of user objects based on the customers array of objects (each user object should just have name and age properties)*/

// let nameAge = customers.map(function (customers){
//     return customers.name + " " + "is" + " " + customers.age
// })
// console.log(nameAge)

// let nameAge = customers.map(customers => customers.map = customers.name + " " + customers.age)
// console.log(nameAge)

/** Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects**/

// let teachersAndPolice = [];
// customers.forEach(function (customers){
//     console.log(customers)
//     if (customers.occupation === 'Police Officer')
//         teachersAndPolice.push(customers)
//     if (customers.occupation === 'Teacher')
//         teachersAndPolice.push(customers)
//     else {
//         return null
//     }
// })
//  console.log(teachersAndPolice)

let teachersAndPolice = customers.filter(customers => customers.occupation !== 'Librarian')
console.log(teachersAndPolice)

/**Determine the average age of all the customers*/

let age = [58, 54, 38];
let averageAge = age.reduce(((previousValue, currentValue) => previousValue + currentValue))
console.log(averageAge/age.length)