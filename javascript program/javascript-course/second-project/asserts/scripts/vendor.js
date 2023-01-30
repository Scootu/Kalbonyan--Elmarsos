let monsterResult = document.getElementById('Monster');
let playerResult = document.getElementById('player');
let countRound = 0 ; 
const attack = document.getElementById('attack');
const heal = document.getElementById('heal');
const special= document.getElementById('special-attack');
const surrender = document.getElementById('surrender'); 

function userOutput(playerHealth,monsterHealth) { 
      
      if(isWin(playerHealth,monsterHealth) === undefined ) {  
         monsterResult.innerHTML = `Monster health :${monsterHealth}%`; 
         playerResult.innerHTML =`Player health : ${playerHealth}%`;
      }else if(isWin(playerHealth,monsterHealth) === true) {
               countRound++ ;  
               monsterResult.innerHTML = `Monster health :${0}%`; 
               alert('you win !');
               if(confirm('do you want to repete ?')) { 
                reste();
            }
      }
      else if(isWin(playerHealth,monsterHealth) === false) { 
        playerHealth = 0 ;
        playerResult.innerHTML = `Player health : ${playerHealth}` ;
        countRound++ ; 
        alert("you lose !"); 
        isBouns(countRound);
           

         
      }else if(isDraw()) {
        monsterResult.innerHTML = `Monster health :${0}%`; 
        playerResult.innerHTML =`Player health : ${0}%`;
        countRound++;
        alert('is a draw !');    
         
         
        
       }
    
}

function getUserInput() { 
    return  parseInt(prompt('what the health of the player'));
}
function reste() { 
    if(confirm('do you want to repete ?')) { 
         playerHealth = getUserInput();
         monsterHealth = 100 ; 
         console.log('repete game'); 
        }
}
function isDraw() { 
    if(playerHealth <=0 && monsterHealth <=0) { 
        
        return true ;
      
    }else { 
        return false ; 
    }
}
function isWin(playerHealth,monsterHealth){ 
    if(playerHealth > 0 && monsterHealth <=0 ) {  
       return true ; 
    }else if(playerHealth<=0 && monsterHealth >0) { 

        return false ; 
    }else { 
        return undefined;
    }

     /* 
    }else if(playerHealth <= 0 && monsterHealth >0) { 
        alert('you lose !');
        //repete 
        
        return false ; 
        
    }else { 
        return false ; 
    }
    */
}
function isBouns(countRound) { 
         if(countRound === 1) { 
            alert('bounce live !') ; 
            playerHealth = 25 ;
            playerResult.innerHTML = `Player health : ${playerHealth}`;     
         }else { 
         reste();
         }
         

}
 
 
