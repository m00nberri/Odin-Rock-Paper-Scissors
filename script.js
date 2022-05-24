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