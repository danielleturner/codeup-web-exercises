/** Break and Continue Exercise*/

//----My Code----

// let numberToStopAt = 27;
//
// let numberInput = prompt('Please pick an odd number between 1 and 50')
//
//  for (var i = 1; i > 50; i+2) {
//     //  if(numberInput !== numberToStopAt%2)
//     //     break;
//     // console.log('Here is an odd number: ' + numberInput);
//
//      while(i == numberToStopAt) {
//          console.log(`Yikes! Skipping ${numberToStopAt}`)
//          break;
//
//          for(var a = 2; 2 > 50; i+2);
//          if(a !== 1){
//              console.log('You picked this number')
//          }
//
//      }
//  }

var userNumber = 0;
do{
    userNumber = Number(prompt('Please enter and odd number'))
    if (userNumber < 1 || userNumber > 50) {
        alert('Number out of bounds')
    }else if ( userNumber%2 === 0) {
        alert('Number is not odd')
    }else if(isNaN(userNumber)) {
        alert('That is not a number')
    }else {
        alert('Yaay your number is good')
        break;
    }

}while(true)

console.log('Number to skip: ' + userNumber)

for (var i = 1; i <= 50; i+=2) {
    if(i === userNumber){
        console.log('Yikes: skipping number: ' + userNumber)
        continue;
    }
}console.log('Here is an odd: ' +i)

