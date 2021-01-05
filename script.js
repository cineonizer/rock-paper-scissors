function main() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    const winOutcomes = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    function playButtonSound() {
        const buttonAudio = document.querySelector('#button-sound');
        buttonAudio.currentTime = 0;
        buttonAudio.play();
    }

    function playWinnerSound() {
        const winnerAudio = document.querySelector('#winner-sound');
        winnerAudio.volume = 0.1;
        winnerAudio.play();
    }

    function playLoseSound() {
        const winnerAudio = document.querySelector('#lose-sound');
        winnerAudio.volume = 0.5;
        winnerAudio.play();
    }

    function getChoices() {
        const playerButtons = document.querySelectorAll('[data-button]');
        const computerRockButton = document.querySelector('#computer-rock-button');
        const computerPaperButton = document.querySelector('#computer-paper-button');
        const computerScissorsButton = document.querySelector('#computer-scissors-button');
        playerButtons.forEach(playerButtons => {
            playerButtons.addEventListener('click', function() {
                const playerChoice = this.dataset.button;
                const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
                playButtonSound();
                if (computerChoice === 'rock') {
                    computerRockButton.classList.add('rock-button-selected');
                    setTimeout(function() { 
                        computerRockButton.classList.remove('rock-button-selected');
                    }, 500);
                }
                if (computerChoice === 'paper') {
                    computerPaperButton.classList.add('paper-button-selected');
                    setTimeout(function() { 
                        computerPaperButton.classList.remove('paper-button-selected');
                    }, 500);
                }
                if (computerChoice === 'scissors') {
                    computerScissorsButton.classList.add('scissors-button-selected');
                    setTimeout(function() { 
                        computerScissorsButton.classList.remove('scissors-button-selected');
                    }, 500);
                }
                playRound(playerChoice, computerChoice);
            });
        });
    }

    function playRound(playerChoice, computerChoice) {
        const roundAnnouncement = document.querySelector('.round-announcement-container');
        const playerScoreUpdate = document.querySelector('#player-score');
        const computerScoreUpdate = document.querySelector('#computer-score');
        round += 1;
        if (playerChoice === computerChoice) {
            roundAnnouncement.textContent = 'Round ' + round + ': Draw.';
        }
        else if (winOutcomes[playerChoice] === computerChoice) {
            roundAnnouncement.textContent = 'Round ' + round + ': You win!';
            playerScore += 1;
            playerScoreUpdate.textContent = playerScore;
        }
        else {
            roundAnnouncement.textContent = 'Round ' + round + ': Bot wins.';
            computerScore += 1;
            computerScoreUpdate.textContent = computerScore;
        }
        endGame();
    }

    function endGame() {
        const mainElement = document.querySelector('.main-container');
        const announcementElement = document.querySelector('.round-announcement-container');
        const instructionElement = document.querySelector('h2');
        const playerWinsElement = document.querySelector('#player-wins');
        const computerWinsElement = document.querySelector('#computer-wins');
        const playAgainButton = document.querySelector('#start-button');
        if (playerScore === 5) {
            mainElement.remove();
            announcementElement.remove();
            instructionElement.remove();
            playWinnerSound();
            playerWinsElement.style.opacity = '1';
            playAgainButton.style.opacity = '1';
        }
        else if (computerScore === 5) {
            mainElement.remove();
            announcementElement.remove();
            instructionElement.remove();
            playLoseSound();
            computerWinsElement.style.opacity = '1';
            playAgainButton.style.opacity = '1';
        }
        playAgainButton.addEventListener('click', function() {
            playButtonSound();
            setTimeout(function() {
                location.reload();
            }, 250);
        });
    }

    getChoices();
    endGame();
}

main();

