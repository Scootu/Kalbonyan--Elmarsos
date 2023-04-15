// program for a simple calculator 

// take the operator input 

 
     const userInput =document.getElementById('input-number').value ; 
     const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const  multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
let result = parseInt(document.getElementById('result'));

      function calculation(operator) { 
               if(isNaN(parseInt(userInput))) return 0;
               if(operator =='+') { 
                      result +=parseInt(userInput);
                      }else if (operator ==='-') { 
                       result -=parseInt(userInput);
                       }else if(operator ==='*') { 
                        result *=parseInt(userInput);
                        }else if(operator ==='/') { 
                         result /= parseInt(userInput);
                         }  
                // to write in the page 
    document.getElementById('result').textContent = result ;
 
      }
function add() { calculation('+') } ; 
function subtract(){ calculation('-') } ;
function multiple() { calculation('*') } ;
function divide() {calculation('/') } ; 
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiple);
divideBtn.addEventListener('click',divide);
 