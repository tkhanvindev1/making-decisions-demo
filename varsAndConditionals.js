/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonAttack = 20
let jamieAttack = 15

if (jonAttack > jamieAttack){
    console.log('Jon Snow attack has better attack then Jamie Lanister')
} else if(jonAttack < jamieAttack){
 console.log('Jamie Lanister attack has better attack then Jon Snow')
} else {
    console.log('Attack will be on the same level')
}

let jamieHealth = 100
let jamieDefense = 15
if (jamieHealth > jonAttack){
    jamieHealth -= jonAttack
    console.log(`Jamie health is now ${jamieHealth}`)
} else {
    console.log('Jamie defeated')
}


let damage = jonAttack - jamieDefense

for(let i=0; i < 5; i++){
    jamieHealth -= damage
    console.log(`Jamie health is now ${jamieHealth}`)
}

while(jamieHealth > 0) {
    jamieHealth -= damage
    if(jamieHealth > 0) {
        console.log('Jamie has survived Jon Attack')
    } else {
        console.log('Jamie is dead')
        }
}
