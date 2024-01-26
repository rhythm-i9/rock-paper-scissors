function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let random_index = Math.floor(Math.random() * 3)
    return choices[random_index]
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case computerSelection:
            return 'tie';
        case 'rock':
            return computerSelection === 'scissor' ? 'win' : 'lose';
        case 'paper':
            return computerSelection === 'rock' ? 'win' : 'lose';
        case 'scissor':
            return computerSelection === 'paper' ? 'win' : 'lose';
        default:
            break;
    }
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let noOfRounds = 5;
    while (noOfRounds != 0) {
        noOfRounds--;
        const playerSelection = prompt("Choose - Rock, Paper, Scissor");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        switch (result) {
            case 'win':
                playerWinCount++;
                break;
            case 'lose':
                computerWinCount++;
                break;
            case 'tie':
                console.log('Tie')
                noOfRounds++
                break;
            default:
                break;

        }
        if (result !== 'tie') {
            console.log(`Round ${5 - noOfRounds}`)
            console.log(`You ${result}!, You chose ${playerSelection}, Computer Chose ${computerSelection} `)
            console.log(`You Won: ${playerWinCount} \nComputer Won: ${computerWinCount}`)
        }
    }
}
game();