
function randomValue(max, min) {
    const Value = Math.random() * (max - min) + min;
    return Math.floor(Value);
  }

let playerHealth =  getUserInput();
//try ... catch statement 
let health = randomValue(15, 5);
let playerAttack = randomValue(10,5);  
let SpeacialAttack = playerAttack * 2;   
let monsterHealth = 100 ; 
let monsterAttack = randomValue(20,10);
let monsterSpecialAttack = randomValue(30,20);
let logEntries = [] ; 

let countAttack =  0 ;

//output the result 
userOutput(playerHealth,monsterHealth) ; 
//log 
function writeToLog(
    caracter,
    countAttack ,
    health,
    isDraw ,
    isWin ,

    ) { 
           const logEntry = {
              event:caracter,
              Attack: countAttack ,  
              currentHealthValue:health,
              Draw:isDraw,
              Win:isWin
                 }
        logEntries.push(logEntry);
         console.log(logEntry);
    
    } ;
    
    //button 

function attackHandler() { 
  
         monsterHealth -=playerAttack ; 
         writeToLog('Player Attack', countAttack ,playerHealth,isDraw(),false); 

         playerHealth -=monsterAttack ; 
         //writeToLog('Monster Attack', countAttack +,monsterHealth,isDraw(),isWin());

         countAttack ++; 
         
         userOutput(playerHealth,monsterHealth);
}
function strongAttackHundler() { 
         
         if(monsterHealth === (2*playerHealth)) { 
            monsterHealth -= SpeacialAttack ; 
            playerHealth -= monsterAttack ;  
         }else { 
            monsterHealth -=SpeacialAttack ; 
            playerHealth -= monsterSpecialAttack ; 
            
         }
          countAttack ++ ; 
         writeToLog('Player Special Attack', countAttack ,playerHealth,isDraw());

         userOutput(playerHealth , monsterHealth,) ; 

}
let Round = 5 ; // هذا عجز  
function playerHealthBounes() {
          //undefiend 

         if(Round > 0) { 
         
         console.log('player use health!');
         playerHealth += health;  
         heal.innerHTML = (`heal ${Round}`); 
         Round-- ; 

         }else { 
        
            playerHealth -= monsterSpecialAttack ;
            
            console.log('respect the rool');
         }
      
       
       userOutput(playerHealth,monsterHealth);

}
function playerSurrender() { 
         confirm('you lose, you want to REPEAT !') ;    
}
attack.addEventListener('click',attackHandler);
heal.addEventListener('click',playerHealthBounes);
special.addEventListener('click',strongAttackHundler);
surrender.addEventListener('click',);

