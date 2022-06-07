let page = document.querySelector('#page')
let container = document.querySelector('#container')
container.setAttribute('class', 'columnMenu')

let mainMenu = document.createElement('div');
mainMenu.setAttribute('class', 'columnMenu');

let mainText = document.createElement('p');
mainText.textContent = 'Super Smash Janken';

let mainButton = document.createElement('button');
mainButton.setAttribute('class', 'menuButton');
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
let playerIcon = document.createElement('img')
playerIcon.setAttribute('class', 'icon')

mainButton.addEventListener('click', () => {
    container.removeChild(mainMenu);
    container.appendChild(characterSelectMenu);
  });

shuri.addEventListener('click', () => {
    characterSelection = 1;
    container.removeChild(characterSelectMenu);
    playerIcon.src = 'img/shuri.png';
    startgame();
})

kani.addEventListener('click', () => {
    characterSelection = 2;
    container.removeChild(characterSelectMenu);
    playerIcon.src = 'img/kani.png';
    startgame();
})

sinu.addEventListener('click', () => {
    characterSelection = 3;
    container.removeChild(characterSelectMenu);
    playerIcon.src = 'img/sinu.png';
    startgame();
})

ninu.addEventListener('click', () => {
    characterSelection = 4;
    container.removeChild(characterSelectMenu);
    playerIcon.src = 'img/ninu.png';
    startgame();
})

let playerInfo = document.createElement('div')
playerInfo.setAttribute('class', 'playerInfo')
let playerHealth = document.createElement('div')
playerHealth.setAttribute('class', 'playerHealth')

let computerInfo = document.createElement('div')
computerInfo.setAttribute('class', 'computerInfo')
let computerHealth = document.createElement('div')
computerHealth.setAttribute('class', 'computerHealth')

let playerHP = 5;

let computerHP =5;


let gameButtons = document.createElement('div')
let rockButton = document.createElement('button')
rockButton.setAttribute('class', 'gameButton')
rockButton.innerHTML = '<img src="img/rock.png" />'
let paperButton = document.createElement('button')
paperButton.setAttribute('class', 'gameButton')
paperButton.innerHTML = '<img src="img/paper.png" />'
let scissorsButton = document.createElement('button')
scissorsButton.setAttribute('class', 'gameButton')
scissorsButton.innerHTML = '<img src="img/scissors.png" />'

let computerButtons = document.createElement('div')
let rockComputer = document.createElement('button')
rockComputer.setAttribute('class', 'computerButton')
rockComputer.innerHTML = '<img src="img/rock.png" />'
let paperComputer = document.createElement('button')
paperComputer.setAttribute('class', 'computerButton')
paperComputer.innerHTML = '<img src="img/paper.png" />'
let scissorsComputer = document.createElement('button')
scissorsComputer.setAttribute('class', 'computerButton')
scissorsComputer.innerHTML = '<img src="img/scissors.png" />'

gameButtons.appendChild(rockButton)
gameButtons.appendChild(paperButton)
gameButtons.appendChild(scissorsButton)

computerButtons.appendChild(rockComputer)
computerButtons.appendChild(paperComputer)
computerButtons.appendChild(scissorsComputer)

playerInfo.appendChild(playerHealth)
playerInfo.appendChild(gameButtons)
computerInfo.appendChild(computerButtons)
computerInfo.appendChild(computerHealth)

let gameText = document.createElement('p')
gameText.textContent = 'FIGHT!'

function startgame () {
    container.setAttribute('class', 'rowMenu')
    page.appendChild(playerInfo);
    page.appendChild(computerInfo);
    container.appendChild(playerIcon);
    gameText.textContent = 'Fight!'
    container.appendChild(gameText);
    computerCharacterSelect();
    container.appendChild(computerIcon);
    playGame();
}

let computerIcon = document.createElement('img')
computerIcon.setAttribute('class', 'icon')

function computerCharacterSelect () {
    let select = [1,2,3,4].filter(item => item !== characterSelection);
    let computerChoice = select[Math.floor(Math.random()*3)];
    switch (computerChoice) {
        case 1:
            computerIcon.src = 'img/shuri.png'
            break;
        case 2:
            computerIcon.src = 'img/kani.png'
            break;
        case 3:
            computerIcon.src = 'img/sinu.png'
            break;
        case 4:
            computerIcon.src = 'img/ninu.png'
            break;
    }
    return computerIcon;
}

function playGame () {
    playerHP = 5;
    computerHP =5;
    playerHealth.textContent = `${playerHP}/5`
    computerHealth.textContent = `${computerHP}/5`

    rockButton.addEventListener('click', rockPlay);
    paperButton.addEventListener('click', paperPlay);
    scissorsButton.addEventListener('click', scissorsPlay);
}

function computerPlay () {
    let computerChoice = Math.floor(Math.random()*2);
    if (computerChoice === 0) {
        return 'rock';
    }
    else if (computerChoice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function resetButtons () {
    rockButton.className = 'gameButton';
    paperButton.className = 'gameButton';
    scissorsButton.className = 'gameButton';
    rockComputer.className = 'computerButton';
    paperComputer.className = 'computerButton';
    scissorsComputer.className = 'computerButton';
}

async function rockPlay () {
    resetButtons();

    await delay(200);

    if (computerPlay() === 'rock') {
        rockButton.className = 'gameButtonTie'
        rockComputer.className = 'computerButtonTie'
    }
    else if (computerPlay() === 'paper') {
        lose();
        rockButton.className = 'gameButtonLose'
        paperComputer.className = 'computerButtonWin'
    }
    else {
        win();
        rockButton.className = 'gameButtonWin'
        scissorsComputer.className = 'computerButtonLose'
    }
}

async function paperPlay () {
    resetButtons();

    await delay(200);

    if (computerPlay() === 'rock') {
        win();
        paperButton.className = 'gameButtonWin'
        rockComputer.className = 'computerButtonLose'
    }
    else if (computerPlay() === 'paper') {
        paperButton.className = 'gameButtonTie'
        paperComputer.className = 'computerButtonTie'
    }
    else {
        lose();
        paperButton.className = 'gameButtonLose'
        scissorsComputer.className = 'computerButtonWin'
    }
}

async function scissorsPlay () {
    resetButtons();

    await delay(200);

    if (computerPlay() === 'rock') {
        lose();
        scissorsButton.className = 'gameButtonLose'
        rockComputer.className = 'computerButtonWin'
    }
    else if (computerPlay() === 'paper') {
        win();
        scissorsButton.className = 'gameButtonWin'
        paperComputer.className = 'computerButtonLose'
    }
    else {
        scissorsButton.className = 'gameButtonTie'
        scissorsComputer.className = 'computerButtonTie'
    }
}

function win () {
    if (computerHP === 1) {
        computerHealth.style.height = '15px'
        computerHP -= 1;
        computerHealth.textContent = `DEFEATED`;
        container.setAttribute('class', 'columnMenu');
        container.removeChild(computerIcon);
        gameText.textContent = `Congratulations, you won!`;
        container.appendChild(playAgainButton);
        rockButton.removeEventListener('click', rockPlay);
        paperButton.removeEventListener('click', paperPlay);
        scissorsButton.removeEventListener('click', scissorsPlay);
        playAgainButton.addEventListener('click', playAgain)
    }
    else {
        computerHit();
        computerHP -= 1;
        computerHealth.textContent = `${computerHP}/5`;
    }
}

function lose () {
    if (playerHP === 1) {
        playerHealth.style.height = '15px';
        playerHP -= 1;
        playerHealth.textContent = `DEFEATED`;
        container.setAttribute('class', 'columnMenu');
        container.removeChild(computerIcon);
        gameText.textContent = `Sorry, you lost!`;
        container.appendChild(playAgainButton);
        rockButton.removeEventListener('click', rockPlay);
        paperButton.removeEventListener('click', paperPlay);
        scissorsButton.removeEventListener('click', scissorsPlay);
        playAgainButton.addEventListener('click', playAgain)
    }
    else {
        playerHit();
        playerHP -= 1;
        playerHealth.textContent = `${playerHP}/5`;
    }
}

function playerHit () {
    playerHealth.style.height = (playerHealth.offsetHeight - (playerInfo.offsetHeight * 0.20)) + 'px';
}

function computerHit () {
    computerHealth.style.height = (computerHealth.offsetHeight - (computerInfo.offsetHeight * 0.20)) + 'px';
}


let playAgainButton = document.createElement('button');
playAgainButton.setAttribute('class', 'button');
playAgainButton.textContent = 'Play Again?';

async function playAgain () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(characterSelectMenu);
    page.removeChild(playerInfo);
    page.removeChild(computerInfo);
    resetButtons();
    playerHealth.style.height = '90%'
    computerHealth.style.height = '90%'
    await delay(50);
    playAgainButton.removeEventListener('click', playAgain);
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}