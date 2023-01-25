
let defaultResult = 0 ;
let currentResult = defaultResult ; 

function getUserInput() { 
    return parseInt(userInput.value) ; 
}

function creatAndWriteOutput(operator ,resultBeforCaLL,callNum) { 
         const calculDescription = `${resultBeforCaLL} ${operator} ${callNum} `;
         outputResult(calculDescription,currentResult) ; // we use currentResult here (global value)
}

function add(num1 , num2) { 
 const entredNumber = getUserInput() ; 
 const initialNumber = currentResult ; 
 currentResult = currentResult + entredNumber ;
 creatAndWriteOutput('+',initialNumber,entredNumber);
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