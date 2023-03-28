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

function edit(li, storage,tasks) {
  //edit

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
 let isEdited = false ; 
function updateLocalStorage(elem, storage, tasks) {
  // console.log(tasks);
  const index = elem.getAttribute("data-index");
  let item = {
    index: index,
    content: elem.firstElementChild.value,
  };
 

   console.log('update');
  //item.index = tasks.length;
  //elem.setAttribute('data-index',item.index);
  //tasks.push(item);
  //console.log('5');
 /* if (!tasks.includes(`${item.content}`) && item.index < tasks.length) {
    console.log("10");
    // alert("you have error");
    tasks[index] = item ; 
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  } */ if (index == tasks.length) {
    console.log(100);
    tasks.push(item);
    localStorage.setItem(`${storage}`, JSON.stringify(tasks));
  } else if (index > tasks.length) {
    console.log(tasks, item);
    alert("you have an error , this task will be not save , please reload");
    //automatic remove .
  } else if (tasks.findIndex((task) => task.index === index) !== -1) {
    // define flag variable outside the loop
    if (!isEdited) { 
      console.log(item);
      console.log('005');
      console.log(tasks[index],tasks[item.index]);
      console.log(tasks[index].content , item.content);
      tasks[item.index].content = item.content ;  
      console.log(tasks);
      localStorage.setItem(`${storage}`, JSON.stringify(tasks));
      console.log(localStorage.getItem(`${storage}`) || '[]');
  
      isEdited = true; // set flag variable to true after the condition is executed
    } else {
      const confirmReload = confirm('To save your changes, please reload the website.');
      if (confirmReload) {
        window.location.reload(); // reload the website if the user clicks "OK"
      }

    }}
  
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
let element ; 

function dragOver(e) {
  e.preventDefault();
  this.classList.add("move");
}
function dragLeave() {
  console.log("event : dragLeave");
  this.classList.remove("move");
}
let isdroped = false ; 
let elementEvent ; 
let elementEventParent ; 
function addEventListener(task,tasks) {
   
  task.addEventListener('drag',(e)=> { 
    if(e.target.nodeName ==='LI')
    elementEvent = e.target ; 
    elementEventParent = elementEvent.parentElement ;  
    //console.log(elementEvent);
  })
  task.addEventListener("dragstart", e =>  { 
    
  });
  task.addEventListener("dragover", dragOver);
  task.addEventListener("dragleave", dragLeave);
  task.addEventListener("drop", (event)=> { 
    if(!isdroped) { 
    console.log("event : dragDrop");
    event.target.classList.remove("move");
    console.log(event.target,elementEvent);
    event.target.insertAdjacentElement('beforebegin',elementEvent);
    
    //save 
    let storage ; 
    storage = getClassName(event.target.parentElement);
    console.log(storage);
    console.log('update'); 
    if(true){
        console.log(tasks);
     let indStart   = event.target.getAttribute('data-index') ;
    let indEnd = elementEvent.getAttribute('data-index') ;
       // indStart++ ;   
      //  console.log(indStart);
       console.log(event.target , elementEvent);
     //  elementEvent.setAttribute('data-index',indStart);
        // in cas of 0 
        //delet 
        
       let storageElem = getClassName(elementEventParent);
       console.log('delet',storageElem);
       let tasks2 = JSON.parse(localStorage.getItem(`${storageElem}`) || '[]');
       Array.from(elementEventParent.querySelectorAll('.task'))
       .reverse()
       .forEach((task,index)=> { 
        if(index < indEnd) { 
            console.log(task);
           console.log(tasks2);
           
            localStorage.setItem(`${storageElem}`, JSON.stringify(tasks2));
           let index1 = index ;  
           let item = { 
            index : `${index1 - 1 }`,
            content : task.firstElementChild.value 
           }
            tasks2[index-1] = item ; 
            console.log('splice',tasks2);
        
           //change all the index of the element  
           task.setAttribute('data-index',index1 - 1);
           
        }
       })
   
//let beTasks =    tasks.slice(0,indStart);
  //    let afTasks =   tasks.slice(indStart);
    //  console.log(beTasks,afTasks);
    Array.from(event.target.parentElement.querySelectorAll('.task'))
    .reverse()
    .forEach((task, index) => {
          console.log(index , indStart);
           if(index > indStart){ 
            
           let item = { 
          index:`${index}`,
          content:task.firstElementChild.value
        } 
          console.log(task);
          console.log(tasks);
          //tasks.push(item);
          tasks[index] = item ; 
          console.log('splice',tasks);
             
            //change all the index of the element  
             task.setAttribute('data-index',index);
             
             localStorage.setItem(`${storage}`, JSON.stringify(tasks));
           }
        
          
        });
        
        /* 
        tasks.forEach((current,index)=> { 
          current.setAttribute('data-index',index);
        })
        */

    //    edit(elementEvent,'start',tasks);
       }
    /*
    updateLocalStorage(elementEvent,'start',tasks);
    */
   isdroped = true; 
  // set flag variable to true after the condition is executed
} else {
  const confirmReload = confirm('To save your changes, please reload the website.');
  if (confirmReload) {
    window.location.reload(); // reload the website if the user clicks "OK"
  }

}

 });
}
function getClassName(list) {
  return list.getAttribute("class").split(" ")[1];
}
const observer = new MutationObserver((mutations) => {
  // Initialize the storage variable to a default value
  let storage = 'comp';
  let elem ; 
  // Check which element triggered the mutation and update the storage variable accordingly
   
  //for(const mutation of mutations){
  mutations.forEach((task)=> { 
    if(task.target.classList.contains('start') && startListList){ 
      elem = task.target ;
      storage = 'start';
      elem.querySelectorAll('.task').forEach((li)=> { 
        //let li = elem.querySelectorAll('.task')[0];
          //edit
          let tasks = JSON.parse(localStorage.getItem(`${storage}`) || '[]');
         
         
            edit(li, storage, tasks);
           
         
          //delet
          //drag and drop 
          
          addEventListener(li,tasks);
       
        })
    }else if(task.target.classList.contains('prog') && progListList){ 
      elem = task.target ;
      storage = 'prog';
      elem.querySelectorAll('.task').forEach((li)=> { 
        //let li = elem.querySelectorAll('.task')[0];
          //edit
          let tasks = JSON.parse(localStorage.getItem(`${storage}`) || '[]');
  
            edit(li, storage, tasks);
         
          //delet
          //drag and drop 
          
          addEventListener(li,tasks);
       
        })
    }else if(task.target.classList.contains('comp') && compListList){ 
      elem = task.target ;
      storage = 'comp';
      elem.querySelectorAll('.task').forEach((li)=> { 
        //let li = elem.querySelectorAll('.task')[0];
          //edit
          let tasks = JSON.parse(localStorage.getItem(`${storage}`) || '[]');
         
            edit(li, storage, tasks);
          
          //delet
          //drag and drop 
          
          addEventListener(li,tasks);
       
        })
    }
  })
//}
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
