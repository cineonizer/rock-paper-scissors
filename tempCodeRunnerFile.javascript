const winOutcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
function getPlayersChoice() {
    const playersChoice = '';
    while (playersChoice !== 'rock' && playersChoice !== 'paper' && playersChoice !== 'scissors') {
        playersChoice = prompt('Make your move: rock, paper, or scissors?').toLowerCase();
    }
    return playersChoice;
}
function getComputerChoice() {
    const computersChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    console.log(computersChoice)
    return computersChoice;
}
function playRound(playersChoice, computersChoice) {
    if (playersChoice === computersChoice) {
        console.log('Draw.');
    }
    else if (winOutcomes[playersChoice] === computersChoice) {
        console.log('You win!');
    }
    else {
        console.log('You lose.');
    }
}
playRound(getPlayersChoice(), getComputerChoice());