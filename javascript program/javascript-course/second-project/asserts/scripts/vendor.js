let monsterResult = document.getElementById('Monster');
let playerResult = document.getElementById('player');
let widthValueMonster = document.getElementById('barMonster'); // for width value 
let widthValuePlayer = document.getElementById('barPlayer');
let countRound = 0 ; 
const attack = document.getElementById('attack');
const heal = document.getElementById('heal');
const special= document.getElementById('special-attack');
const surrender = document.getElementById('surrender'); 
const BattleLog = document.getElementById('BattleLog');
function getResult(playerHealth,monsterHealth) { 
         monsterResult.innerHTML = `Monster health:${monsterHealth}%`;
         playerResult.innerHTML =`Player health : ${playerHealth}%`;
         }
         
function streamWidhtPlayer(health) {
        
         if(health > 100) {
            //virtual value 
            
            let x =( 100 / health ); 
            health *= x ; //it's always 100% 
           console.log(`the health value > 1000 ${health}` ); 
           widthValuePlayer.style.width = `${health}%`;   
           
         }else {
             widthValuePlayer.style.width = `${health}%` ;
             
         }         
}
function streamWidhtMonster(health) {
             widthValueMonster.style.width = `${health}%` ;       
}

function gameCheck(playerHealth,monsterHealth) { 
      
      if(isWin(playerHealth,monsterHealth) === undefined ) {  
               getResult(playerHealth,monsterHealth);
               
                streamWidhtMonster(monsterHealth);
                streamWidhtPlayer(playerHealth) ; 
               
      }else if(isWin(playerHealth,monsterHealth) === true) {
               countRound++ ;  
               getResult(playerHealth,0) ;
               //monsterResult.innerHTML = `Monster health :${0}%`; 
               alert('you win !');
               
               reste();        
      }
      else if(isWin(playerHealth,monsterHealth) === false) { 
       //local scoope
        
        
        //playerResult.innerHTML = `Player health : ${playerHealth}` ;
        countRound++ ; 
        alert("you lose !"); 
        getResult(0,monsterHealth);
        streamWidhtMonster(monsterHealth);
        streamWidhtPlayer(0) ; 
        isBouns(countRound);
        
         
      }else if(isDraw()) {
        getResult(0,0);
        /*
        monsterResult.innerHTML = `Monster health :${0}%`; 
        playerResult.innerHTML =`Player health : ${0}%`;
        */
        countRound++;
        alert('is a draw !');    
          streamWidhtMonster(monsterHealth);
       streamWidhtPlayer(playerHealth) ; 
         
        
       }
       /*
       streamWidhtMonster(monsterHealth);
       streamWidhtPlayer(playerHealth) ; 
       */
}


   
function getUserInput() { 
        let userInputValue =  parseInt(prompt('what the health of the player')) ;
        if(isNaN(userInputValue)) { 
             alert('Number Invalide') ;
             throw 'invalide number'  ;
             //reste();
             }else if(isNaN(userInputValue) === false) {
                     return userInputValue ; 
             }
             //max value i want to control in each throw and build cathe base on it 
       
 }
 
function limitingGameValue(userInputValue) {
          //default value 
            
       if(userInputValue >= 100) {
          monsterAttack = monsterAttack * (userInputValue * 0.01) ; 
          monsterSpecialAttack  *=(userInputValue * 0.01) ;
         }  
         if(userInputValue === 25 ) { 
            monsterAttack = defaultMonsterAttack;
            monsterSpecialAttack = defaultMonsterSpecialAttack ; 
            }
         if(userInputValue >= 1000) { 
            alert('maximem value is 1000') ;
            playerHealth = 1000 ; 
            }
           
             
   }  
function reste() { 

    if(confirm('do you want to repete ?')) { 
         playerHealth = getUserInput();
         monsterHealth = 100 ; 
         console.log('repete game'); 
         getResult(playerHealth,monsterHealth);
         heal.innerHTML = `heal ${5}` ; 
         
         //limiting value  
         limitingGameValue(playerHealth) ; 
         //console.log(`Monster attack reste ${monsterAttack}`);  
        }else if(isWin(playerHealth,monsterHealth))  { 
         getResult(playerHealth,0);//are this enafe 
        }else if(isWin(playerHealth,monsterHealth)) {
         getResult(0,monsterHealth); 
        }else {}
        return true ; 
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
          //  streamWidhtPlayer(playerHealth) ; 
            getResult(playerHealth,monsterHealth);
            limitingGameValue(playerHealth) ; 
           
            streamWidhtPlayer(25) ; 
            writeToLog('Bouns points', countAttack ,playerHealth);
            
            //console.log(`Monster attack isBouns ${monsterAttack}`);  
            //playerResult.innerHTML = `Player health : ${playerHealth}`;
            
         }else { 
         reste();
         }
         

}
 
 
