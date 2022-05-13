function computerPlay () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } 
    else if (choice === 1) {
        return 'paper';
    } 
    else {
        return 'scissors';
    }
}

function playerSelection () {
    return (window.prompt('Please type rock, paper, or scissors.',)).toLowerCase();
}

function playGame () {
    let rounds = parseInt(window.prompt('How many rounds would you like to play?', ));
    for (let i = 0; i < rounds; i++) {
        let computer = computerPlay();
        console.log("Computer chose: " + computer)
        switch (playerSelection()) {
            case 'rock':
                if (computer === 'rock') {
                    console.log("Both rock, that's a tie!");
                }
                else if (computer === 'paper') {
                    console.log("Sorry, you lose. Paper covers Rock.");
                }
                else {
                    console.log("Congratulations, you won! Rock smashes scissors!");
                }
                break;
            case 'paper':
                if (computer === 'rock') {
                    console.log("Congratulations, you won! Paper covers Rock!");
                }
                else if (computer === 'paper') {
                    console.log("Both paper, that's a tie!");
                }
                else {
                    console.log("Sorry, you lose. Scissors cut Paper.");
                }
                break;
            case 'scissors':
                    if (computer === 'rock') {
                        console.log("Sorry, you lose. Rock smashes Scissors.");
                    }
                    else if (computer === 'paper') {
                        console.log("Congratulations, you won! Scissors cuts Paper!");
                    }
                    else {
                        console.log("Both scissors, that's a tie!");
                    }
                    break;
            default:
                console.log('please enter rock, paper, or scissors');
        }
    } 
}

playGame();