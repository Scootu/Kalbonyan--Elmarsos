
function randomValue(max, min) {
    const Value = Math.random() * (max - min) + min;
    return Math.floor(Value);
  }

let playerHealth;

let health = randomValue(15, 5);
let playerAttack = randomValue(10,5);  
let SpeacialAttack = playerAttack * 2;   
let monsterHealth = 100 ; 
let monsterAttack = randomValue(20,10);
const  defaultMonsterAttack  = randomValue(20,10); 
let monsterSpecialAttack = randomValue(30,20) ;
const  defaultMonsterSpecialAttack = randomValue(30,20) ; //
let logEntries = [] ; 

let countAttack =  0 ;
//try ..catch 
try { 
    playerHealth = getUserInput() ; 

    }catch(e) {
     alert('default value is 100'); 
     playerHealth = 100 ;
     console.log('default value :true');  
     }
 //limiting value 
   
  limitingGameValue(playerHealth) ; 
//output the result 
getResult(playerHealth,monsterHealth);
//log 
function writeToLog(
    caracter,
    countAttack ,
    health
    ) { 
           const logEntry = {
              event:caracter,
              Attack: countAttack ,  
              currentHealthValue:health
                 }
         logEntries.push(logEntry);
         //console.log(logEntry);
        // for (let i =0 ;i < logEntries.length ;i++) {
              let i = countAttack ; 
              console.log(`event : ${logEntries[i].event}`);
              console.log(`Attack: ${logEntries[i].Attack}`);
              console.log(`currentHealthValue: ${logEntries[i].currentHealthValue}`); 
         //    }
    
    } ;
    
    //button 

function attackHandler() { 
         if(playerHealth >=0 ) { 
         monsterHealth -=playerAttack ; 
         }
        
         if(monsterHealth >=0) { 
         playerHealth -=monsterAttack ; 
         }
         //writeToLog('Monster Attack', countAttack +,monsterHealth,isDraw(),isWin());
        // console.log(`Monster attack attackHandler ${monsterAttack}`);    
         writeToLog('Player Attack', countAttack ,playerHealth); 
         countAttack++; 
         gameCheck(playerHealth,monsterHealth);
}
function strongAttackHundler() { 
         
         if(monsterHealth >= (30 * playerHealth / 100)) { 
            monsterHealth -= SpeacialAttack ; 
            playerHealth -= monsterAttack ;  
         }else { 
            monsterHealth -=SpeacialAttack ; 
            playerHealth -= monsterSpecialAttack ; 
            
         }
         
         writeToLog('Player Special Attack', countAttack ,playerHealth);
     
         countAttack++ ; 
         gameCheck(playerHealth , monsterHealth,) ; 

}
let Round = 4 ; // هذا عجز  
let i = 1 ; 
function playerHealthBounes() {
          //undefiend 

         if(Round >= 0) { 
       
           if(playerHealth <= monsterHealth * 0.1  ) 
               playerHealth += 2 * health; 
              else { 
               playerHealth += health ; 
               }    
           console.log(`player use health! +${health} Times :${i++}`);
           heal.innerHTML = (`heal ${Round--}`); 
          
      }else if(isWin(playerHealth,monsterHealth) === false ) { 
             Round = 4 ; 
      }else { 
            
            playerHealth -= monsterSpecialAttack ;
            console.log(`respect the rool -${monsterSpecialAttack} Times :${i++}`);
         }
       
       gameCheck(playerHealth,monsterHealth);

}
function playerSurrender() { 
         getResult(0,monsterHealth) ; 
         reste();
         
}
function logEveryThing(){ 
         //another way to do this ? 
         console.log("this is log for every thing in the game") ;
         console.log("---------------------------------------");
         console.log("Monster ------------------ Slayer ") ; 
         console.log("---------------------------------------");
         for(let i =0;i<logEntries.length;i++) { 
              
              console.log(`event : ${logEntries[i].event}`);
              console.log(`Attack: ${logEntries[i].Attack}`);
              console.log(`currentHealthValue: ${logEntries[i].currentHealthValue}`); 
         }
}
attack.addEventListener('click',attackHandler);
heal.addEventListener('click',playerHealthBounes);
special.addEventListener('click',strongAttackHundler);
surrender.addEventListener('click',playerSurrender);
BattleLog.addEventListener('click',logEveryThing);
