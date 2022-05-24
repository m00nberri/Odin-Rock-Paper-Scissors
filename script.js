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

function playGame () {
    for (let i = 0; i < rounds; i++) {
        let computer = computerPlay();
        console.log("Computer chose: " + computer)
        switch (true) {
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

let container = document.querySelector('#container')

let mainMenu = document.createElement('div');
mainMenu.setAttribute('class', 'menu');

let mainText = document.createElement('p');
mainText.textContent = 'Super Smash Janken';

let mainButton = document.createElement('button');
mainButton.setAttribute('class', 'button');
mainButton.textContent = 'Play Now';

mainMenu.appendChild(mainText);
mainMenu.appendChild(mainButton);
container.appendChild(mainMenu);




mainButton.addEventListener('click', () => {
    container.removeChild(mainMenu);
  });