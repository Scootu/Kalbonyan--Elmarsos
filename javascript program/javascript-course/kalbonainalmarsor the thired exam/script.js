//const taskList = document.querySelectorAll('')
const task = document.getElementsByClassName("task");
const startList = document.querySelector(".task-container.start"),
  startTaskList = startList.querySelector(".task-list"),
  progList = document.querySelector(".task-container.prog"),
  compList = document.querySelector(".task-container.comp");

//btn
const startListBtn = startList.querySelector(".addBtn"),
  progListBtn = progList.querySelector(".addBtn"),
  compListBtn = compList.querySelector(".addBtn");

// standared list
let userListtasks = [];
//
let start = [];
//update function

function updateTasks(scoop, storage) {
  const tasks = JSON.parse(localStorage.getItem(`${storage}`) || "[]");
  console.log(tasks);

  tasks.forEach((item) => {
    let liTag = `<li class="task" draggable="true" data-index=${item.index} >
  <input type="text" class="taskInput" placeholder ="click in any point to finich" disabled= "true" >
  <span class="control">
      <span class="material-symbols-outlined">
          edit
      </span>
      <span class="material-symbols-outlined">
          close
      </span>
  </span>
</li>`;
    scoop.insertAdjacentHTML("afterbegin", liTag);
    scoop.querySelector('.task').firstElementChild.value = item.content ; 
  });
}
let indexElemitems = JSON.parse(localStorage.getItem('start') || "[]").length  ; 
let indexElemitemp  = JSON.parse(localStorage.getItem('prog') || "[]").length  ; 
let indexElemitemc  = JSON.parse(localStorage.getItem('comp') || "[]").length  ; 
//create task  list
function createListstart(e) {
  //default value 
   // indexElementFun(e.target); 
  // console.log(getClassName(e.target.previousElementSibling));
  // JSON.parse(localStoragegetItem("tasks") || "[]");
  console.log(indexElemitems);
  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitems++} >
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

  this.previousElementSibling.insertAdjacentHTML("afterbegin", liTag);
}
function createListprog(e) {
  //default value 
   // indexElementFun(e.target); 
  // console.log(getClassName(e.target.previousElementSibling));
  // JSON.parse(localStoragegetItem("tasks") || "[]");
  console.log(indexElemitemp);
  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitemp++} >
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

  this.previousElementSibling.insertAdjacentHTML("afterbegin", liTag);
}
function createListcomp(e) {
  //default value 
   // indexElementFun(e.target); 
  // console.log(getClassName(e.target.previousElementSibling));
  // JSON.parse(localStoragegetItem("tasks") || "[]");
  console.log(indexElemitemc);
  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitemc++} >
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

  this.previousElementSibling.insertAdjacentHTML("afterbegin", liTag);
}
//userListtasks = JSON.parse(localStorage.getItem("tasks"));
//console.log(userListtasks);
//
function indexElementFun(name) {
  
 
  // console.log(this.previousElementSibling)
  // let indexElem = indexElementFun();
 // console.log(getClassName(e.target.parentElement));
   if(getClassName(name.previousElementSibling) == 'start') { 
     return  JSON.parse(localStorage.getItem('start') || "[]").length ; 
     
  } else if(getClassName(name.previousElementSibling) == 'prog') { 
     return JSON.parse(localStorage.getItem('prog') || "[]").length ;
   
  }else { 
    return  JSON.parse(localStorage.getItem('comp') || "[]").length  ; 
  } 
  
  }
//there are a fow changes
let fromItemCont;
function UpdateFunction() {
  const taskInputs = startList.querySelectorAll(".task");

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
    // defin the stage task
    // Add the event listener if it hasn't already been added
    //if (!input.hasListener) {
    //input.hasListener = true;
    edit(input, controlStart);

    //}
  });
}
function edit(li, storage) {
  //edit
  let tasks = JSON.parse(localStorage.getItem(`${storage}`) || "[]");

  let input = li.firstElementChild;
  let control = li.querySelector(".control");
  input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      input.disabled = true;
      //update local storage
      updateLocalStorage(li, storage, tasks);
    }
  });
  control.firstElementChild.addEventListener("click", (event) => {
    input.disabled = false;
  });
}
function updateLocalStorage(elem, storage, tasks) {
  // console.log(tasks);
  const index = elem.getAttribute("data-index");
  let item = {
    index: index,
    content: elem.firstElementChild.value,
  };
   
  //item.index = tasks.length;
  //elem.setAttribute('data-index',item.index);
  //tasks.push(item);
  //console.log('5');
  if (!tasks.includes(`${item.content}`) && item.index < tasks.length) {
    console.log("10");
    // alert("you have error");
    tasks[index] = item ; 
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  } else if (index == tasks.length) {
    console.log(100);
    tasks[index] = item ;
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  } else if (index > tasks.length) {
    console.log(tasks, item);
    alert("you have an error , this task will be not save , please reload");
    //automatic remove .
  } 
  /*
    tasks.push(item);
   
    elem.setAttribute("data-index", tasks.length - 1);
    tasks[tasks.length - 1].index = elem.getAttribute("data-index");
    console.log("false");
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));*/
  /* else if (!tasks.hasOwnProperty(index)) {
    console.log(index); 
    console.log("7");
    tasks.push(item);
    elem.setAttribute("data-index", tasks.length - 1);
    tasks[tasks.length - 1].index = elem.getAttribute("data-index");
    //tasks.push(item);
  }*/

  //three local storage
  
  console.log("save", tasks , storage);
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
  task.addEventListener("drop", dragDrop);
}
function getClassName(list) {
  return list.getAttribute("class").split(" ")[1];
}
const observer = new MutationObserver((mutations) => {
  // Initialize the storage variable to a default value
  let storage = 'comp';
  
  // Check which element triggered the mutation and update the storage variable accordingly


  // for(const mutation of mutations){
  let mutation = mutations[0];
  const elem = mutation.target;
  if (mutation.target === startListList) {
    storage = 'start';
  } else if (mutation.target === progListList) {
    storage = 'prog';
  }
  
  elem.querySelectorAll(".task").forEach((li) => {
    //edit
    edit(li, storage);
    //delet
  });

  //  }
});

const startListList = startList.querySelector(".task-list");
const progListList = progList.querySelector(".task-list");
const compListList = compList.querySelector(".task-list");
observer.observe(startTaskList, {
  childList: true,
});
observer.observe(progListList, {
  childList: true,
});
observer.observe(compListList, {
  childList: true,
});
//update tasks in the dom
updateTasks(startListList, "start");
updateTasks(progListList, "prog");
updateTasks(compListList, "comp");

startListBtn.addEventListener("click", createListstart);
progListBtn.addEventListener("click", createListprog);
compListBtn.addEventListener("click", createListcomp);
