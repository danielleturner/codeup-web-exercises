"use strict";

const gitToken = "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"
//
// console.log(gitToken)

// console.log(gitToken)

function getLastCommit(username){
    fetch(`https://api.github.com/users/${username}/events/public`, // here I make am intial request to api
        {headers: {'Authorization': gitToken}}) // this allows me to pull from github api user info in api
    .then(response => response.json())/// here .then() changes information that came from fetch to json
        .then(data => {console.log(data)// once json is store i gave it data and consoled log using arrow function
            data[0].created_at // here I go into the array since it's at index 0 I use index of 0 then inside index0  i go to created_at to pull data from there
            console.log(data[0].created_at)
            setTimeout(() =>{
                return $('#danny').append(data[0].created_at)
            }, 2000)
        })
        .then(() => {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(dogo => dogo.json())
                .then(dogo => {console.log(dogo)
                    setTimeout(() => {
                        return $('#dogo').attr("src", dogo.message) //because i'm adding a different pic i have to put src for img in html followed by a comma
                        // then id of img tag plus the where the picture is being pulled from
                    }, 3000)
                })
        })
}

getLastCommit('danielleturner')

function wait(setTime){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             return  resolve('You will see this after setTime:' + setTime)
        }, setTime);
    });
}
wait(1000).then(response => console.log(response))

function happyTime(SetTime){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            return resolve('ARRRRR')
        }, SetTime);
    })
}
happyTime(3000).then(response => console.log(response))

