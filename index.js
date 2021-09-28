let firstCard
let secondCard
let sum
let hasBlackJack = false
let isAlive = true
let message = ""

// function for the start button
function startGame(){
    firstCard = parseInt(prompt("Enter a card number: "))
    secondCard = parseInt(prompt("Enter a card number: "))
    sum = firstCard + secondCard
    // document.getElementById('sumEl').textContent = "Sum: " + sum
    document.querySelector('#sumEl').textContent = "Sum: " + sum

    // Cards result
    document.querySelector('#cardEl').textContent = "Cards " + firstCard + ", " + secondCard
    
    if(sum <= 20){
        message = "Do you want to draw another card?"
        document.getElementById('result').textContent = message
    }else if (sum === 21){
        message = "Whooh, You've got a BlackJack"
        document.getElementById('result').textContent = message
        hasBlackJack = true
    }else{
        message = "You are out of the game"
        document.getElementById('result').textContent = message
        isAlive = false
    }
}


function newCard(){
    NewCard = parseInt(prompt("Enter a card number: "))
    sum += NewCard

    startGame()
}