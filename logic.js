let playerWinCount;
let computerWinCount;
let roundNumber;

const rpsImagePath = { rock: './assets/images/rock.svg', paper: './assets/images/paper.svg', scissor: './assets/images/scissors.svg' };
initializeGame()

function initializeGame() {
    playerWinCount = 0;
    computerWinCount = 0;
    roundNumber = 1;

    document.getElementById('round-number').innerText = roundNumber;
    document.getElementById('player-win-count').innerText = playerWinCount;
    document.getElementById('computer-win-count').innerText = computerWinCount;
}


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let random_index = Math.floor(Math.random() * 3)
    return choices[random_index]
}

function playRound(playerSelection) {
    if (roundNumber>5) return; 
    let result;
    let computerSelection = getComputerChoice();

    document.getElementById('show-selection-container').style.visibility = 'visible'

    switch (playerSelection) {
        case computerSelection:
            result = 'tie';
            break;
        case 'rock':
            result = computerSelection === 'scissor' ? 'win' : 'lose';
            break;
        case 'paper':
            result = computerSelection === 'rock' ? 'win' : 'lose';
            break;
        case 'scissor':
            result = computerSelection === 'paper' ? 'win' : 'lose';
            break;
        default:
            break;
    }
    updateGame(playerSelection, computerSelection, result);
}

function updateGame(playerSelection, computerSelection, result) {

    document.getElementById('player-selection').src = rpsImagePath[playerSelection];
    document.getElementById('computer-selection').src = rpsImagePath[computerSelection]
    if (roundNumber <= 5) {
        switch (result) {
            case 'win':
                playerWinCount++;
                break;
            case 'lose':
                computerWinCount++;
                break;
            case 'tie':
                console.log('Tie')
                roundNumber--;
                document.getElementById('round-result').innerText = "It's a Tie!";
                break;
            default:
                break;

        }
        if (result !== 'tie') {
            document.getElementById('player-win-count').innerText = playerWinCount;
            document.getElementById('computer-win-count').innerText = computerWinCount;
            document.getElementById('round-result').innerText = `Player ${result}! Player chose ${playerSelection}, Computer Chose ${computerSelection} `;
        }
        roundNumber++;
        if (roundNumber === 6) {
            if (playerWinCount > computerWinCount)
                document.getElementById('game-result').innerText = "Player Wins The Game";
            else document.getElementById('game-result').innerText = "Computer Wins The Game";

            document.getElementById('game-result-container').style.visibility = 'visible'
        } else {
            document.getElementById('round-number').innerText = roundNumber;
        }
    }
}

function playAgain(){
    document.getElementById('show-selection-container').style.visibility = 'hidden';
    document.getElementById('round-result').innerText = ''
    document.getElementById('game-result-container').style.visibility = 'hidden';
    initializeGame()
}