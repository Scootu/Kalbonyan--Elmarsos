//const taskList = document.querySelectorAll('')
const task = document.getElementsByClassName("task");
const startList = document.querySelector(".task-container.start"),
      controlStart = startList.querySelector('.control') , 
  progList = document.querySelector(".task-container.prog"),
      controlProg = progList.querySelector('.control'),
  compList = document.querySelector(".task-container.comp"),
      controlComp = compList.querySelector('.control'); 

//btn
const startListBtn = startList.querySelector(".addBtn"),
  progListBtn = progList.querySelector(".addBtn"),
  compListBtn = compList.querySelector(".addBtn");

// standared list
let userListtasks = [];

//create task list
let indexElemitem = 0;
function createList() {
  //   console.log(this.previousElementSibling)
  // let indexElem = indexElementFun();

  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitem++} >
  <input type="text" class="taskInput" placeholder ="click in any point to finich" >
  <span class="control">
      <span class="material-symbols-outlined">
          edit
      </span>
      <span class="material-symbols-outlined">
          close
      </span>
  </span>
</li>
  `;
  // log in Object

  this.previousElementSibling.insertAdjacentHTML("beforeend", liTag);
  let taskListItems = this.previousElementSibling.querySelectorAll(".task");

  taskListItems.forEach((elem) => {
    let inputTag = elem.firstElementChild;
    indexContent = inputTag.value;

    //object element

    inputTag.addEventListener("keydown", (ekey) => {
      if (ekey.key == "") {
        inputTag.disabled = false;
      } else if (ekey.key == "Enter") {
        inputTag.disabled = true;
        // log in array
      }
    });

    let elemEvent = elem.querySelector(".control").firstElementChild;
    elemEvent.addEventListener("click", (event) => {
      inputTag.disabled = false;
    });
    // save to a local storage 1 copy
  });
}
//userListtasks = JSON.parse(localStorage.getItem("tasks"));
//console.log(userListtasks);
//
function indexElementFun() {
  return Math.random();
}
//there are a fow changes
 let fromItemCont ;
function UpdateFunction() { 
  const taskInputs = document.querySelectorAll(".task");

  // Load existing tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
 
  // Update the task data and add event listeners
  taskInputs.forEach((task) => {
    const input = task.firstElementChild;
    const taskIndex = task.getAttribute("data-index");
    const taskContent = input.value;
    fromItemCont = task.firstElementChild.value;
    // Update the task data
    tasks[taskIndex] = {
      index: taskIndex,
      content: taskContent,
    };

    // Add the event listener if it hasn't already been added
    if (!input.hasListener) {
      input.hasListener = true;
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const input = event.target;
          const taskIndex = input.parentElement.getAttribute("data-index");
          const taskContent = input.value;

          // Update the task data
          tasks[taskIndex] = {
            index: taskIndex,
            content: taskContent,
          };

          // Save the task data to localStorage

          console.log(input.value);
          

          // Disable the input field
          input.disabled = true;
          fromItemCont = task.firstElementChild.value;
        
          addEventListener(task);
        }
      
      });

      // Declare and assign the fromItemCont variable
    
      
    }
  });
}
function edit(input) {
  //edit 
   input.addEventListener('keydown',()=> { 
    
   })
  //update local storage 

}
function updateLocalStorage(ans, storage,tasks) {
  if(ans){
    //three local storage 
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  }
}
function dragStart() {
  // console.log("event : dragStart");
}
function dragEnter() {
  //console.log("event : dragEnter");
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("move");
}
function dragLeave() {
  //  console.log("event : dragLeave");
  this.classList.remove("move");
}
function dragDrop() {
  //console.log("event : dragDrop");
  this.classList.remove("move");
  let toItemindex = this.getAttribute("data-index");

  // swapFunction(fromItem,toItem);
}

function addEventListener(task) {

  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragenter", dragEnter);
  task.addEventListener("dragover", dragOver);
  task.addEventListener("dragleave", dragLeave);
  task.addEventListener("drop",dragDrop);
}

startListBtn.addEventListener("click", createList);
progListBtn.addEventListener("click", createList);
compListBtn.addEventListener("click", createList);


