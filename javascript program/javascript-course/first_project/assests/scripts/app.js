
let defaultResult = 0 ;
let currentResult = defaultResult ; 
let logEntries = [] ; // log value of user input data 
//
function getUserInput() { 
    return parseInt(userInput.value) ; 
}
//gut operators and current and entred number and output result and ther description 
function creatAndWriteOutput(operator ,resultBeforCaLL,callNum) { 
         const calculDescription = `${resultBeforCaLL} ${operator} ${callNum} `;
         outputResult(calculDescription,currentResult) ; // we use currentResult here (global value)
}

function add(num1 , num2) { 
 const entredNumber = getUserInput() ; 
 const initialNumber = currentResult ; 
 currentResult = currentResult + entredNumber ; // val += deval 

 creatAndWriteOutput( //we can use this lake a name calculationDescription and use outputResult 
    '+',
    initialNumber,
    entredNumber
    );
    const logEntry = {
          number:entredNumber ,
          operation:"ADD", 
          prevResult:initialNumber ,
          result:currentResult 
             }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract() {
    const entredNumber = getUserInput();
    const initialNumber = currentResult ; 
    currentResult = currentResult - entredNumber ; 
    creatAndWriteOutput('-',initialNumber,entredNumber);
 }

function multiply() {
    const entredNumber = getUserInput();
    const initialNumber = currentResult ; 
    currentResult = currentResult * entredNumber ; 
    creatAndWriteOutput('*',initialNumber,entredNumber);
}

function divide() {
    const entredNumber = getUserInput();
    const initialNumber = currentResult ; 
    currentResult = currentResult / entredNumber ; 
    creatAndWriteOutput('/',initialNumber,entredNumber);
 }
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

let currentResultDescription = `(${currentResult} +10/2+3)` ;
//outputResult(currentResultDescription,currentResult);  we change this because we want the output return value when we click in the button 