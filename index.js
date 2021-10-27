let firstCard = getRandomNumbers()
let secondCard = getRandomNumbers()
let cards = [firstCard, secondCard]
let message = ""
let sum = cards[0] + cards[1]


//function to get a random number....

function getRandomNumbers(){
    let randomNumers = Math.floor(Math.random()*13) + 1
    if(randomNumers > 10){
        return 11
    }else if(randomNumers === 1){
        return 10
    }else{
        return randomNumers
    }
    
}


function startGame(){
    renderGame()
}

// function for the start button
function renderGame(){ 
    let cardEL = document.querySelector('#cardEl').textContent = "Cards " 
    for(let i = 0; i < cards.length; i++){
        cardEL = document.querySelector('#cardEl').textContent += cards[i] + " "
    }


    // document.getElementById('sumEl').textContent = "Sum: " + sum
    document.querySelector('#sumEl').textContent = "Sum: " + sum

    
    if(sum <= 20){
        message = "Do you want to draw another card?"
        document.getElementById('result').textContent = message

    }else if (sum === 21){
        message = "Whooh, You've got a BlackJack"
        document.getElementById('result').textContent = message

    }else{
        message = "You are out of the game"
        document.getElementById('result').textContent = message
    }
}


function newCARD(){
    let anotherCard = getRandomNumbers()

    sum += anotherCard
    cards.push(anotherCard)
    console.log(cards)

    document.getElementById('sumEl').textContent = sum

    renderGame()
    
}