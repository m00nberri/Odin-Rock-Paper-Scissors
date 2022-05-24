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
mainMenu.setAttribute('class', 'columnMenu');

let mainText = document.createElement('p');
mainText.textContent = 'Super Smash Janken';

let mainButton = document.createElement('button');
mainButton.setAttribute('class', 'button');
mainButton.textContent = 'Play Now';

mainMenu.appendChild(mainText);
mainMenu.appendChild(mainButton);
container.appendChild(mainMenu);


let characterSelectMenu = document.createElement('div');
characterSelectMenu.setAttribute('class', 'columnMenu');

let characterSelectText = document.createElement('p')
characterSelectText.textContent = 'Choose Your Fighter!'

let shuri = document.createElement('button');
shuri.setAttribute('class', 'characterSelector')
shuri.innerHTML = '<img src="img/shuri.png" />'
let kani = document.createElement('button');
kani.setAttribute('class', 'characterSelector')
kani.innerHTML = '<img src="img/kani.png" />'
let sinu = document.createElement('button');
sinu.setAttribute('class', 'characterSelector')
sinu.innerHTML = '<img src="img/sinu.png" />'
let ninu = document.createElement('button');
ninu.setAttribute('class', 'characterSelector')
ninu.innerHTML = '<img src="img/ninu.png" />'

let characterSelect = document.createElement('div')
characterSelect.setAttribute('class', 'rowMenu')

characterSelect.appendChild(shuri);
characterSelect.appendChild(kani);
characterSelect.appendChild(sinu);
characterSelect.appendChild(ninu);

characterSelectMenu.appendChild(characterSelectText);
characterSelectMenu.appendChild(characterSelect);
let characterSelection = ''

mainButton.addEventListener('click', () => {
    container.removeChild(mainMenu);
    container.appendChild(characterSelectMenu);
  });

shuri.addEventListener('click', () => {
    characterSelection = 'Shuri';
    container.removeChild(characterSelectMenu);
})

kani.addEventListener('click', () => {
    characterSelection = 'Kani';
    container.removeChild(characterSelectMenu);
})

sinu.addEventListener('click', () => {
    characterSelection = 'Sinu';
    container.removeChild(characterSelectMenu);
})

ninu.addEventListener('click', () => {
    characterSelection = 'Ninu';
    container.removeChild(characterSelectMenu);
})