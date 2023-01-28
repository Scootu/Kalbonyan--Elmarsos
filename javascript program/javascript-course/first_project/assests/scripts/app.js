
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
// a function for console log a tracked array for every function button 

function writeToLog(
operationIdentifier ,
prevResult,
operationNumber,
newResult) { 
       const logEntry = {
          number:operationNumber,
          operation:operationIdentifier, 
          prevResult:prevResult,
          result:newResult 
             }
    logEntries.push(logEntry);
    console.log(logEntries);

} ;


//we can build a one function can calculate all property add 
//subtract and multiply and divide 
//like the file "simple calucltor" 

function add(num1 , num2) { 
 const entredNumber = getUserInput() ; 
 const initialNumber = currentResult ; 
 currentResult = currentResult + entredNumber ; // val += deval 
      if(isNaN(entredNumber)) { return ;};
 creatAndWriteOutput( //we can use this lake a name calculationDescription and use outputResult 
    '+',
    initialNumber,
    entredNumber
    );
   writeToLog('ADD',initialNumber,entredNumber,currentResult);
}

function subtract() {
    const entredNumber = getUserInput();
    const initialNumber = currentResult ; 
    currentResult = currentResult - entredNumber ; 
     if(isNaN(entredNumber)) { return ;};
    creatAndWriteOutput('-',initialNumber,entredNumber);
    writeToLog('subtract',initialNumber,entredNumber,currentResult);
 }

function multiply() {
    const entredNumber = getUserInput();
    const initialNumber = currentResult ; 
    currentResult = currentResult * entredNumber ; 
     if(isNaN(entredNumber)) { return ;};
    creatAndWriteOutput('*',initialNumber,entredNumber);
    writeToLog('multiply',initialNumber,entredNumber,currentResult);
}

function divide() {
    const entredNumber = getUserInput();
    const initialNumber = currentResult ; 
    currentResult = currentResult / entredNumber ; 
     if(isNaN(entredNumber)) { return ;};
    creatAndWriteOutput('/',initialNumber,entredNumber);
    writeToLog('divide',initialNumber,entredNumber,currentResult);
 }
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

let currentResultDescription = `(${currentResult} +10/2+3)` ;
//outputResult(currentResultDescription,currentResult);  we change this because we want the output return value when we click in the button 


/// undefiend null and NaN 

//null represent the absence of object value 

//NaN Not a Number (3 * 'hi') 
//undefiend represent undefiend value for a variable or function ...
