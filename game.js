const winOutcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
let playerScore = 0;
let computerScore = 0;
function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt('Make your move: rock, paper, or scissors?').toLowerCase();
    } while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors');
    return playerChoice;
}
function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    return computerChoice;
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('Draw. Redo.');
        return playRound(getPlayerChoice(), getComputerChoice());
    }
    else if (winOutcomes[playerChoice] === computerChoice) {
        console.log('You win!');
        return playerScore += 1;
    }
    else {
        console.log('You lose.');
        return computerScore += 1;s 
    }
}
// function playGame() {
//     let numberOfRounds;
//     do {
//         numberOfRounds = prompt('How many rounds you want to play?', 1);
//     } while (numberOfRounds < 1 || isNaN(numberOfRounds));
//     for (let i = 0; i < numberOfRounds; i++) {
//         playRound(getPlayerChoice(), getComputerChoice());
//     }
//     if (playerScore > computerScore) {
//         console.log('-------------------\n' + 'You won ' + playerScore + ' out of ' + numberOfRounds + '!');
//     }
//     else {
//         console.log('-------------------\n' + 'You lost ' + computerScore + ' out of ' + numberOfRounds + '.');
//     }
}
playGame();