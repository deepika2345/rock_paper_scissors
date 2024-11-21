/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let score = 0;
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    return choice[Math.floor(Math.random() * 3)];

}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost

    // playerChoice="Rock";
    // computerChoice="Sissors";

    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) return 0;

    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock')) 
        return 1;

    // Otherwise human loses (aka set score to -1)
    return -1;

    // return score

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    let playerScore=document.getElementById('player-score');
    let hands=document.getElementById('hands');
    let result=document.getElementById('result');
    let choice={
        'Rock':'✊',
        'Paper':'🤚',
        'Scissors':'✌'
    }
    let res=getResult(playerChoice,computerChoice);
    let resMsg="";
    if(res==0){
        resMsg="We R Same"
    }
    else if(res==1){
        resMsg="Great Buddy U Won!"
    }
    else{
        resMsg="Try Again Buddy"
    }
    score += res;
    playerScore.innerText=`${score}`
    hands.innerText=`👧 ${choice[playerChoice]} vs 🤖 ${choice[computerChoice]}`;
    result.innerText=resMsg;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    let computerChoice=getComputerChoice();
    showResult(playerChoice,computerChoice);

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    let rpsButton = document.querySelectorAll('.rpsButton');
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    console.log('hi')
    console.log(rpsButton)

    rpsButton.forEach(rpsButton => {
        console.log(rpsButton)
        rpsButton.onclick = () => {
            onClickRPS(rpsButton.value)
            console.log(rpsButton.value)
        }
    })


    // Add a click listener to the end game button that runs the endGame() function on click
    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => {
        endGame();
    }

}

// ** endGame function clears all the text on the DOM **
function endGame() {
    document.getElementById('player-score').innerText = "";
    document.getElementById('hands').innerText = "";
    document.getElementById('result').innerText = "";
    score = 0;
}

playGame() 