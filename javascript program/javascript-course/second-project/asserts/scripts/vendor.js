let monsterResult = document.getElementById('Monster');
let playerResult = document.getElementById('player');

const attack = document.getElementById('attack');
const heal = document.getElementById('heal');
const special= document.querySelector('special-attack');
const surrender = document.getElementById('surrender'); 

function userOutput(playerHealth,monsterHealth) { 
monsterResult.innerHTML = `Monster health :${monsterHealth}%`; 
playerResult.innerHTML =`Player health : ${playerHealth}%`;
}

function getUserInput() { 
    return  parseInt(prompt('what the health of the player'));
}