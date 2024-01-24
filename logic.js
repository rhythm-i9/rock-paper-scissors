function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let random_index = Math.floor(Math.random() * 3)
    return choices[random_index]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === 'rock' && computerSelection === 'paper') result = 'Lose';
    else if (playerSelection === 'paper' && computerSelection === 'paper') result = 'Tie';
    else if (playerSelection === 'scissor' && computerSelection === 'paper') result = 'Win';

    else if (playerSelection === 'rock' && computerSelection === 'scissor') result = 'Win';
    else if (playerSelection === 'paper' && computerSelection === 'scissor') result = 'Lose';
    else if (playerSelection === 'scissor' && computerSelection === 'scissor') result = 'Tie';

    else if (playerSelection === 'rock' && computerSelection === 'rock') result = 'Tie';
    else if (playerSelection === 'paper' && computerSelection === 'rock') result = 'Win';
    else if (playerSelection === 'scissor' && computerSelection === 'rock') result = 'Lose';

    return result
}

function game() {
    let noOfRounds = 5;
    while (noOfRounds != 0) {
        const playerSelection = prompt("Choose - Rock, Paper, Scissor");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        if (result.toLowerCase() === 'win') {
            console.log(`You ${result}!, ${playerSelection} beats ${computerSelection}`);
        }
        else if (result.toLowerCase() === 'lose') {
            console.log(`You ${result}!, ${computerSelection} beats ${playerSelection}`);
        }
        else {
            console.log("Tie");
            noOfRounds++;
        }
        noOfRounds--;
    }
}
game();