// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) {
    let thankYouMessage = ["Thank you, Guadalupe, for the wonderful surprise gift!",
        "Thank you, Ollie, for the wonderful surprise gift!",
        "Thank you, Aki, for the wonderful surprise gift!"
    ];
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessage;
}
writeCards(cards);
function countDown(){
    for(let i = 10; i >= 0; i--) {
        console.log(i)
    }  
}
