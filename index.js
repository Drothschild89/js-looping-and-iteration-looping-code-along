// Code your solutions in this file
let giftNames = ["Ada", "Brendan", "Ali"];
let event = 'surprise';
function writeCards(name, event){
    let surprise = [];
    for(let i = 0; i < giftNames.length; i++){
        surprise[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }
    return surprise;
}

function countDown(n){
    while (n >= 0){
        console.log(n--)
    }
}