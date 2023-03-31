// Detect if device is touch-enabled
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

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
  //(tasks);

  tasks.forEach((item) => {
    let liTag = `<li class="task" draggable="true" data-index=${item.index} >
  <input type="text" class="taskInput" placeholder ="click to save" disabled= "true" >
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
    let li = scoop.querySelector('.task');
    li.firstElementChild.value = item.content;

    edit(li);
    addEventListener(li);
  });

}
let indexElemitems = JSON.parse(localStorage.getItem('start') || "[]").length;
let indexElemitemp = JSON.parse(localStorage.getItem('prog') || "[]").length;
let indexElemitemc = JSON.parse(localStorage.getItem('comp') || "[]").length;
//create task  list
function createListstart(e) {
  //default value 
  // indexElementFun(e.target); 
  // //(getClassName(e.target.previousElementSibling));
  // JSON.parse(localStoragegetItem("tasks") || "[]");
  //(indexElemitems);
  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitems++} >
  <input type="text" class="taskInput" placeholder ="click to save" >
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
  let li = this.parentElement.querySelector('.task');
  edit(li);
  addEventListener(li);
}
function createListprog(e) {
  //default value 
  // indexElementFun(e.target); 
  // //(getClassName(e.target.previousElementSibling));
  // JSON.parse(localStoragegetItem("tasks") || "[]");
  //(indexElemitemp);
  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitemp++} >
  <input type="text" class="taskInput" placeholder ="click to save" >
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
  let li = this.parentElement.querySelector('.task');
  edit(li);
  addEventListener(li);
}
function createListcomp(e) {
  //default value 
  // indexElementFun(e.target); 
  // //(getClassName(e.target.previousElementSibling));
  // JSON.parse(localStoragegetItem("tasks") || "[]");

  let liTag = `
  <li class="task" draggable="true" data-index=${indexElemitemc++} >
  <input type="text" class="taskInput" placeholder ="click to save">
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
  let li = this.parentElement.querySelector('.task');
  edit(li);

  addEventListener(li);

}
//userListtasks = JSON.parse(localStorage.getItem("tasks"));
////(userListtasks);
//
function indexElementFun(name) {


  // //(this.previousElementSibling)
  // let indexElem = indexElementFun();
  // //(getClassName(e.target.parentElement));
  if (getClassName(name.previousElementSibling) == 'start') {
    return JSON.parse(localStorage.getItem('start') || "[]").length;

  } else if (getClassName(name.previousElementSibling) == 'prog') {
    return JSON.parse(localStorage.getItem('prog') || "[]").length;

  } else {
    return JSON.parse(localStorage.getItem('comp') || "[]").length;
  }

}

function inputFun(event) {

  let li = event.target.parentElement;
  let input = li.firstElementChild;
  let storage = getClassName(li.parentElement);
  //(event.target);


  if (event.key == "Enter") {
    input.disabled = true;

    //update local storage
    // updateLocalStorage(li, storage, tasks);
    updateTaskEvent(li.parentElement, storage);
  }

}

function controlFunFirst(event) {

  let input = event.target.parentElement.previousElementSibling;
  input.disabled = false;

}
function controlFunLast(event) {

  let li = event.target.parentElement.parentElement;
  let storage = getClassName(li.parentElement);

  let liParent = li.parentElement;
  li.remove();
  //('can delet');
  updateTaskEvent(liParent, storage);
}

function edit(li) {
  //edit

  let input = li.firstElementChild;
  let control = input.nextElementSibling;
  console.log('hello');
  
  // we use addEventListener because , for remove theme 
  input.addEventListener("keydown", inputFun);
  control.firstElementChild.addEventListener("click", controlFunFirst);
  control.lastElementChild.addEventListener('click', controlFunLast);
}

let isEdited = false;
function updateLocalStorage(elem, storage, tasks) {
  // //(tasks);
  const index = elem.getAttribute("data-index");
  let item = {
    index: index,
    content: elem.firstElementChild.value,
  };



  //item.index = tasks.length;
  //elem.setAttribute('data-index',item.index);
  //tasks.push(item);
  ////('5');
 /* if (!tasks.includes(`${item.content}`) && item.index < tasks.length) {
    //("10");
    // alert("you have error");
    tasks[index] = item ; 
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  } */ if (index == tasks.length) {
    //(100);
    tasks.push(item);
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  } else if (index > tasks.length) {
    //(tasks, item);
    alert("you have an error , this task will be not save , please reload");
    //automatic remove .
  } else if (tasks.findIndex((task) => task.index === index) !== -1) {
    // define flag variable outside the loop
    if (!isEdited) {
      //(item);
      //('005');
      //(tasks[index], tasks[item.index]);
      //(tasks[index].content, item.content);
      tasks[item.index].content = item.content;
      //(tasks);
      localStorage.setItem(`${storage}`, JSON.stringify(tasks));
      //(localStorage.getItem(`${storage}`) || '[]');

      isEdited = true; // set flag variable to true after the condition is executed
    } else {
      const confirmReload = confirm('To save your changes, please reload the website.');
      if (confirmReload) {
        window.location.reload(); // reload the website if the user clicks "OK"
      }

    }
  }

  /*
    tasks.push(item);
   
    elem.setAttribute("data-index", tasks.length - 1);
    tasks[tasks.length - 1].index = elem.getAttribute("data-index");
    //("false");
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));*/
  /* else if (!tasks.hasOwnProperty(index)) {
    //(index); 
    //("7");
    tasks.push(item);
    elem.setAttribute("data-index", tasks.length - 1);
    tasks[tasks.length - 1].index = elem.getAttribute("data-index");
    //tasks.push(item);
  }*/

  //three local storage

  //("save", tasks, storage);
}
let element;

function dragOver(e) {
  e.preventDefault();
  this.classList.add("move");
}
function dragLeave(e) {
   
}
let isdroped = false;
let elementEvent;
let elementEventParent;
let intersectingElement ;
let beforeIntersectingElement ; 
function drag(e) {
  
}

function addEventListener(task) {
if(!isTouchDevice) { 
  task.addEventListener('dragstart',(event)=> { 
    task.style.opacity = 0.3 ; 
  })
    task.addEventListener('drag', (e) => {
    if (e.target.nodeName === 'LI') { 
    elementEvent = e.target;
    elementEventParent = elementEvent.parentElement;
   
    }
   
    ////(elementEvent);
  })
  
  task.addEventListener("dragover", dragOver);
  task.addEventListener("dragleave", (event)=> { 
    console.log('leave');
    
    task.classList.remove("move");
    task.style.opacity = 1 ;
    console.log(task,task.style.opacity);
  });
  task.addEventListener("drop", (event) => {
    elementEvent.style.opacity = 1 ; 
    //("event : dragDrop");
    event.target.classList.remove("move");
    //(event.target, elementEvent);
    event.target.insertAdjacentElement('beforebegin', elementEvent);
    //save 
    let storage;
    storage = getClassName(event.target.parentElement);
    let storageElem = getClassName(elementEventParent);
    //('delet', storageElem);
    //let tasks2 = JSON.parse(localStorage.getItem(`${storageElem}`) || '[]');
    updateTaskEvent(elementEventParent, storageElem);
    updateTaskEvent(event.target.parentElement, storage);

  });

/* else { 
  task.addEventListener('touchstart',f)
} */ 
//this code from chatgpt 
}  else {
  let touchX, touchY, taskX, taskY;
   // Add touch event listeners to the task
task.addEventListener('touchstart', (event)=> { 
  // Save the starting touch position and task position
 
  console.log(event.touches);
  touchX = event.touches[0].clientX;
  touchY = event.touches[0].clientY;
  taskX = task.offsetLeft;
  taskY = task.offsetTop;
});

task.addEventListener('touchmove', (event) => {  
event.preventDefault();
task.style.position = 'absolute';
task.style.width ='250px';
task.style.opacity = 0.3 ;
// Calculate the new position of the task based on the touch movement
const deltaX = event.touches[0].clientX - touchX;
const deltaY = event.touches[0].clientY - touchY;
const newTaskX = taskX + deltaX;
const newTaskY = taskY + deltaY;

// Update the position of the task
//task.style.left = newTaskX + 'px';
task.style.top = newTaskY + 'px';

}) ; 
  console.log('I am very sorry, the mobile version is coming as soon as possible (:');
} /*
 
 

  // Get the bounding rectangle of the current li element
  const liRect = li.getBoundingClientRect();

  // Calculate the coordinates of the center of the li element
  const liCenterX = liRect.left + liRect.width / 2;
  const liCenterY = liRect.top + liRect.height / 2;

  // Get the element at the current touch point
  const intersectingElement = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);

  // Check if the intersecting element is an li element
  if (intersectingElement.nodeName === 'LI') {
    // Get the bounding rectangle of the intersecting li element
    const intersectingRect = intersectingElement.getBoundingClientRect();

    // Calculate the coordinates of the center of the intersecting li element
    const intersectingCenterX = intersectingRect.left + intersectingRect.width / 2;
    const intersectingCenterY = intersectingRect.top + intersectingRect.height / 2;

    // Calculate the distance between the centers of the two li elements
    const distance = Math.sqrt((liCenterX - intersectingCenterX) ** 2 + (liCenterY - intersectingCenterY) ** 2);

    // If the distance is less than 5px, change the background color of the intersecting li element to red
    if (distance < 5) {
      intersectingElement.style.backgroundColor = 'red';
    }
  }

  
  
  });
  task.addEventListener('touchend',(event)=> { 
     intersectingElement.classList.remove('move');   
  
  })
  
  /*
  task.addEventListener('touchend',(event)=> { 
    task.style.position ='relative';
    task.style.width = '100%';
    task.style.opacity = 1 ; 
  })
}
*/ 
}






function updateTaskEvent(event, storage) {

  let taskEvent = Array.from(event.querySelectorAll('.task')).reverse();
  let tasks2 = [...taskEvent].map((task, index) => {
    return {
      index: index,
      content: task.firstElementChild.value
    }
  })
  //(tasks2);
  localStorage.removeItem(`${storage}`);
  localStorage.setItem(`${storage}`, JSON.stringify(tasks2));
}
function getClassName(list) {
  return list.getAttribute("class").split(" ")[1];
}


const startListList = startList.querySelector(".task-list");
const progListList = progList.querySelector(".task-list");
const compListList = compList.querySelector(".task-list");

//update tasks in the dom
updateTasks(startListList, "start");
updateTasks(progListList, "prog");
updateTasks(compListList, "comp");

startListBtn.addEventListener("click", createListstart);
progListBtn.addEventListener("click", createListprog);
compListBtn.addEventListener("click", createListcomp);

let cla = document.querySelectorAll('#cla').forEach((item) => {
  addEventListener(item);
});

