//const taskList = document.querySelectorAll('')
const task = document.getElementsByClassName("task");
const startList = document.querySelector(".task-container.start"),
  progList = document.querySelector(".task-container.prog"),
  compList = document.querySelector(".task-container.comp");

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
//Update Tasks
/*
function UpdateFunction() {
  let indexElem , 
      indexContent ; 
  let arrObj = [] ; 
  //load 
  Array.from(task).forEach((elem ,index) => {
    let inputTag = elem.firstElementChild;
    indexElem =  elem.getAttribute('data-index');
    indexContent = elem.firstElementChild.value ;
  
     elem.addEventListener("keydown", (key) => {
      if (inputTag.disabled) {
          console.log('entre');
      }});
   arrObj[index] = {
      index:indexElem ,
      Content : indexContent
    };
//save 
    localStorage.setItem("tasks", JSON.stringify(arrObj));

    });
      
  }
  
  //arrObj.push(elemObj);
  //localStorage.setItem("tasks", JSON.stringify(arrObj));


*/
//there are a fow changes
 let fromItemCont ;
function UpdateFunction() {
  const taskInputs = document.querySelectorAll(".task");

  // Load existing tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
 
  // Update the task data and add event listeners
  taskInputs.forEach((task, index) => {
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
          localStorage.setItem("tasks", JSON.stringify(tasks));

          // Disable the input field
          input.disabled = true;
          fromItemCont = task.firstElementChild.value;
          console.log(`fromItemCont: ${fromItemCont}`);
          addEventListener(task);
        }
      
      });

      // Declare and assign the fromItemCont variable
    
      
    }
  });
}
/*
function swapFunction(fromItem, toItem) {
  let arrTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  console.log(fromItem, toItem);
  if (arrTasks != []) {
    let contenrtItemfrom = arrTasks[fromItem].content,
      contenrtItemto = arrTasks[toItem].content;
    arrTasks[fromItem].content = contenrtItemto;
    arrTasks[toItem].content = contenrtItemfrom;

    //DOM
    const taskList = document.querySelectorAll(".task");
    Array.from(taskList).forEach((elem) => {
      if (fromItem == elem.getAttribute("data-index")) {
        elem.firstElementChild.value = contenrtItemto;
      }
      if (toItem == elem.getAttribute("data-index")) {
       
      }
    });

    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }
}
*/
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
  let toItemCont = this.firstElementChild.value;

  toItemCont = fromItemCont; 
  fromItemCont = this.firstElementChild.value; 
  console.log(toItemCont,fromItemCont);
  console.log('drop') ;
  // swapFunction(fromItem,toItem);
}

function addEventListener(task) {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragenter", dragEnter);
  task.addEventListener("dragover", dragOver);
  task.addEventListener("dragleave", dragLeave);
  task.addEventListener("drop",dragDrop);
}
//from chatGpt
// Define the MutationObserver to observe changes to the task container
// Define the MutationObserver to observe changes to each task container

document.querySelectorAll(".task-container").forEach((taskContainer) => {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        // Iterate over all added nodes and call the UpdateFunction for each task element
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains("task")) {
            UpdateFunction(node);
          }
        });

        // Iterate over all removed nodes and do any necessary cleanup
        mutation.removedNodes.forEach((node) => {
          // your cleanup code here
        });
      }
    }
  });

  // Start observing changes to the task container
  observer.observe(taskContainer, { childList: true, subtree: true });
});

// Call the UpdateFunction for all task elements on the page
document.querySelectorAll(".task").forEach((taskElement) => {
  UpdateFunction(taskElement);
});

//Event listener btn

startListBtn.addEventListener("click", createList);
progListBtn.addEventListener("click", createList);
compListBtn.addEventListener("click", createList);

//
