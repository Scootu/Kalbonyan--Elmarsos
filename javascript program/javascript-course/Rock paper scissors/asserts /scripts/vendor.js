const playBtn = document.querySelector('.feed-in-btn');
const fadeOut = document.querySelector('.feed-out');
const btnContainer = document.querySelector('.feed-in');

// Result scoore 
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('comp-score') ; 
const result = document.querySelector('.resultLive') ; 

// reste button 
const resteGamebtn = document.getElementById('resteGame');
///scoore 
let uScore = 0 ; 
let cScore = 0 ; 
// log 

let logEntries = [];

function writingToLog(
  Round,
  player,
  computer
) { 
   const logEntrie = { 
    TheRound : Round , 
    ThePlayer : player,
    TheComputer : computer
   }
   logEntries.push(logEntrie);
   logEntries.forEach(function item(){

    console.log(`The Round : ${this.TheRound}`);
    console.log(`Player chosse : ${this.ThePlayer}`);
    console.log(`The computer chosse : ${this.TheComputer}`);
   });
}
//Reste Game button
function startGame(){ 
   resteGamebtn.classList.add('feed-out');
   playBtn.addEventListener("click",function (){
      btnContainer.classList.add('feed-out'); 
      fadeOut.classList.add("fade-in");
      resteGamebtn.classList.remove('feed-out');
   });
}

function resetGame() { 
        
         resteGamebtn.addEventListener("click",()=> { 
          //score for the 0
          uScore = 0 ;
          cScore = 0 ; 
          btnContainer.classList.remove("feed-out");
          fadeOut.classList.remove("fade-in");
          result.innerHTML = 'Make your move !';
          resteGamebtn.classList.add('feed-out');
          gameUpdate();
         });

}

function playMatch() { 
  const options = document.querySelectorAll(".imgBtnCot");

  //Computer Options 
  const computerOptions = ["rock","paper","scissors"];

  options.forEach(item => { // we can use function(standar func) 
    item.addEventListener("click", function(){ 
         //Computer Choise 
         const computerNumber = Math.floor(Math.random() * 3) ;
         const computerChoice = computerOptions[computerNumber];
         
         //console.log(`hello ${this.alt}`);
         gameLogic(this.alt,computerChoice);
         resetGame();
    });
    
  });
  
  

}
function gameLogic(userChoice,computerChoice) { 

    //    console.log('Game function: user choice is = ' + userChoice);
  //console.log('Game function: computer choice is = ' + computerChoice);
     if(userChoice === computerChoice) { 
        draw(userChoice,computerChoice);
        return ; 
     }
     //check for Rock 
     if(userChoice === 'rock'){ 
        if(computerChoice === 'scissors') { 
          win(userChoice,computerChoice);
          return ; 
        }else { 
          lose(userChoice,computerChoice);
          return ;
        }
     }
     //check for paper 

     if(userChoice === 'paper'){ 
      if(computerChoice === 'rock') { 
        win(userChoice,computerChoice);
        return ; 
      }else { 
        lose(userChoice,computerChoice);
        return;
      }
   }
   //check for scissors 
   if(userChoice === 'scissors'){ 
    if(computerChoice === 'paper') { 
      win(userChoice,computerChoice);
      return ; 
    }else { 
      lose(userChoice,computerChoice);
      return;
    }
 }
 
}
function draw(user,computer) { 
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result.innerHTML = `<p>It was a draw! You both chose ${user}</p>`;     
}

//win 
function win(user,computer) { 
  uScore++;
  //Update result user 
  
  gameUpdate();
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result.innerHTML =`<p>${user}${userName} beats ${computer}${compName}. You win!</p>`;
  
}
//lose 
function lose(user,computer) { 
   cScore++;
   //update computer resutl 
   gameUpdate() ;
   const userName = ' (user)'.fontsize(3).sup();
   const compName = ' (comp)'.fontsize(3).sup();
  result.innerHTML =`<p>${user}${userName} beats ${computer}${compName}. You lose</p>`;
}

function gameUpdate() { 
  userScore.innerHTML = `${uScore}`;
  compScore.innerHTML  =  `${cScore}`;
}