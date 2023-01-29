
function randomValue(max, min) {
    const attackValue = Math.random() * (max - min) + min;
    return Math.floor(attackValue);
  }

let playerHealth =  getUserInput();
//try ... catch statement 
let playerAttack = randomValue(10,5);  
let SpeacialAttack = playerAttack * 2;   
let monsterHealth = 100 ; 
let monsterAttack = randomValue(20,10);
let logEntries = [] ; 
let countRound  =  0 ;

//output the result 
userOutput(playerHealth,monsterHealth) ;
//log 
function writeToLog(
    caracter,
    countRound,
    playerHealth,
    monsterHealth,
    isDraw ,
    isWin ,

    ) { 
           const logEntry = {
              event:caracter,
              Round:countRound, 
              currentPlayerHealthValue:playerHealth,
              currentMonsterHealthValue:monsterHealth ,
              Draw:isDraw,
              Win:isWin
                 }
        logEntries.push(logEntry);
        console.log(logEntries);
    
    } ;
    function isDraw() { 
        if(playerHealth === 0 && monsterHealth === 0) { 
            alert('it\' a draw !');
            return true ;
          
        }else { 
            return false ; 
        }
    }
    function isWin(){ 
        if(playerHealth > 0 && monsterHealth <=0 ) {  
            alert("you win !");
           return true ; 
          
        }else if(playerHealth <= 0 && monsterHealth >0) { 
            alert('you lose !');
            //repete 
            
            return false ; 
            
        }else { 
            return false ; 
        }
    }
    // 
    let win = isWin() ;
    let draw = isDraw();
    //button 

function attackHandler() {
         playerHealth -=monsterAttack ; 
         monsterHealth -=playerAttack ; 
         countRound++;
         win = isWin();
         draw = isDraw() ;
         writeToLog('player',countRound ,playerHealth,monsterHealth,draw,win);
         userOutput(playerHealth,monsterHealth);
}


attack.addEventListener('click',attackHandler);
heal.addEventListener('click');
special.addEventListener('click');
surrender.addEventListener('click');

