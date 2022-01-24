/**The first thing I need to do is add an event listener*/



///this defines the pater that we want to initiate the easter egg
// var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

//This variable will track how many keys in the pattern have been successfully pressed, so that we know when it’s complete.
// var current = 0;

// var keyHandler = function (e){
    // console.log(e.key);
    // if (pattern.indexOf(e.key) < 0 || e.key !== pattern[current]) {
    //     current = 0;
    //     return;
    // }
    //update how much of the patter is complete
    // current++;

    //If complete, alert and play movie
//     if (pattern.length === current){
//         current = 0;
//         alert('You found it!');
//     }
// };
//
//
//
// document.addEventListener('keydown', keyHandler, false);



// let konamiCode = ['38', '38','40', '40','37','39', '37', '39', '66', '65', '13'];
// let userCode = [];
let keys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
};

let konamiCode = [ "up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];



document.addEventListener("keydown", checkCode, false);

let keyCount = 0;

let timerID;

function checkCode(event) {
    let keyPressed = keys[event.keyCode];

    if (keyPressed === konamiCode[keyCount]) {
        keyCount++;

        window.clearTimeout(timerID);

        timerID = window.setTimeout(resetKeyState, 1000)

        if(keyCount === konamiCode.length) {
            cheatCodeActivated();
            resetKeyState();
        }
    } else {
        resetKeyState();
    }
}

function cheatCodeActivated(){
    alert('Cheat Code activated!');
}

function resetKeyState(){
    keyCount = 0;
    window.clearTimeout(timerID);
}






    // let pressedCode = [];
// let konamiCode = ['38', '38','40', '40','37','39', '37', '39', '66', '65', '13'];
//
// window.addEventListener('keyup', (e) => {
//     console.log(e.key)
//     pressedCode.push(e.key);
//     pressedCode.splice(konamiCode.length -1, pressedCode.length - konamiCode.length);
//
//     if(pressedCode.join('').includes(konamiCode)) {
//         console.log("yaay");
//         console.log(pressedCode);
//     }
// })