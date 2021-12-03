// var i = 2;
//
// while (i < 65536) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//         i *= 2
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {

    var conesToPurchase = Math.floor(Math.random() * 5) + 1;

    if(conesToPurchase <= allCones) {
        console.log(conesToPurchase + "cones sold...")
        allCones -= conesToPurchase
    }else {
        console.log('Can not sell you ' + conesToPurchase + 'I only have' + allCones + '....')
    }
console.log(allCones)
}while (allCones > 0)
console.log('Yaay I sold all cones')

