let cards = [];
let sumofCards = 0;
let isAlive = false;
let bullEye = false;
let msage = " ";
let messageJS = document.getElementById("message");
let cardsJS = document.getElementById("cards");
let sumJS = document.getElementById("sum");

function getRandom() {
    let randomNUM = (Math.floor(Math.random() * 13) + 1);
    if (randomNUM == 1) {
        return 11;
    }
    else if (randomNUM >= 11) {
        return 10;
    }
    else {
        return randomNUM;
    }
}

// function live(){
//     let firstCard = getRandom();
//     let secondCard = getRandom();
//     cards = [firstCard, secondCard];
//     sumofCards = cards[0] + cards[1];
//     startGame()

// }

function startGame() {
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();

    cards = [firstCard, secondCard];

    for (i = 0; i < cards.length; i++) {
        cardsJS.innerText += cards[i] + "-";
    }

    for (let i = 0; i < cards.length; i++) {
        sumofCards += cards[i];
        sumJS.innerText = "Sum : " + sumofCards;

    }

    if (sumofCards < 21) {
        msage = "Would you like to DRAW a new card ?";
    }
    else if (sumofCards == 21) {
        msage = "Bulls EYE ! , You got the Black Jack";
        bullEye = true;
    }
    else {
        msage = "You are out of the GAME";
        isAlive = false;
    }

    messageJS.innerText = msage;
}



function newCard() {
    if (isAlive == true && bullEye == false) {

        let thirdCard = getRandom();
        cards.push(thirdCard);
        sumofCards = 0;

        cardsJS.innerText = "Cards : ";
        for (i = 0; i < cards.length; i++) {
            cardsJS.innerText += cards[i] + "-";
        }


        for (let i = 0; i < cards.length; i++) {
            sumofCards += cards[i];
            sumJS.innerText = "Sum : " + sumofCards;
        }

        if (sumofCards < 21) {
            msage = "Would you like to DRAW a new card ?";
            isfinished = false;
        }
        else if (sumofCards == 21) {
            msage = "Bulls EYE ! , You got the Black Jack";
            bullEye = true;
        }
        else {
            msage = "You are out of the GAME";
            isAlive = false;
        }

        messageJS.innerText = msage;
    }
}


let amount = 145;
let chipsWin = document.getElementById("chips");
chipsWin.innerText = "Earned Amount : $ " + amount;
// while (bullEye=true) {
//     amount += 15;
// }


function restart() {
    cards = [];
    isAlive = true;
    sumofCards = 0;
    let blank = sumofCards;
    blank=" ";
    bullEye = false;
    msage = "Do you want to Play a Round ?";
    messageJS.innerText = msage;
    sumJS.innerText = "Sum : " + blank;
    cardsJS.innerText = "Cards : ";
        for (i = 0; i < cards.length; i++) {
            cardsJS.innerText += cards[i] + "-";
        }
}