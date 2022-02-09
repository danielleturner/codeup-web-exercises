

// function wait(setTime) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return $('#coffee').css('backgroud-color', 'red')
//         }, setTime);
//     });
// }
// wait(3000).then(response => console.log(response))

function changeBackground(body){
    fetch("http://http://localhost:63342/codeup-web-excercises/myPortfolioWork/myWebsite.html?_ijt=4p0fc0a9s5bbp569la9ttq79j8&_ij_reload=RELOAD_ON_SAVE")
        .then(cup => cup.json())
        .then(cup => {console.log(cup)

        })
}

