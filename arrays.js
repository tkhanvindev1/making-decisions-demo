/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// let backpack = []

// backpack.push('Lightsaber')
// backpack.push('robe','food')

// // console.log(backpack)

// let belt = backpack.shift()

// backpack.splice(1,0, 'coat')

// let bag = []

// bag.unshift('flint','blanket','toothbrash')

// backpack.push(bag.slice(0, 3))

// console.log(bag)
// console.log(backpack)
// console.log(belt)

// for (i=0; i < bag.length; i++){
//     console.log(bag[i])
// }

// for (i=0; i < backpack.length -1; i++){
//     console.log(backpack[i])
// }


let guessMe = 54

while (guessMe < 100) {
    console.log('----------')
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5.  Added 25.')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.')
        guessMe -= 27
    } else {
        console.log('Added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}.`)
}