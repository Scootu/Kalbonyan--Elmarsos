
//The name of javascript 
const userInput = prompt("What's the \"official\" name of javascript?");
      //conditions names 
      if(userInput === 'ECMAScript') {
         alert("Right!");
      }else {
         alert("you don\'t Know? ECMAScript!");
       
      }
      
 //show the sign 
 
(function(){
  "use strick";
    const userInput = parseInt(prompt("Type a number :",'0'));
    if(userInput > 0) { 
          alert("1");
          }
     else if(userInput < 0) { 
             alert("-1")
             }
     else { 
                 alert("0")
                 }
                 
})();

//Rewite this if using the conditional operator '?' 

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
//

let result = (a+b <4) ? 'Below' :'Over' ;

///////////////////
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
//
let message = (login =='Employee') ? 'Hello'     : (login =='Director') ? 'Greetings' : (login == '') ? 'No login'  : '' ;   
  