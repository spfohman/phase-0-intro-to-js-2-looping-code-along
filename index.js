// Code your solutions in this file
/*for (let age = 30; age <40; age ++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
}
const gifts=["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for(let i =0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}

wrapGifts(gifts);
*/


const thanks=[];
function writeCards(names, events){
    for(let i=0; i<names.length; i++){
        var add = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        thanks.push(add);
    }
    return thanks;
}
writeCards(names, events);

function countDown(n){
    while (n>=0){
        console.log(n);
        n--;
    }
}
countDown(n);