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

function createList() {
  //   console.log(this.previousElementSibling)
  let indexElem = indexElementFun();
  let indexContent;
  let liTag = `
  <li class="task" draggable="true" data-index=${indexElem} >
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

  let elemObjarr = [];

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
   
    let elemObj = {
      index: indexElem,
      content: indexContent,
    };
    
     
  });
 
}
 userListtasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(userListtasks);
//
function indexElementFun() {
  return Math.random();
}
//Update Tasks  


function UpdateTasks(arrObj,itemElem) {
    task.forEach((elem)=>{
     console.log(elem);
    });
    arrObj.push(itemElem);
    localStorage.setItem("tasks", JSON.stringify(arrObj));
}


//Event listener btn
task.forEach((elem) =>{
    elem.addEventListener('keydown',(key)=> {
      if(key.key == "Enter") {
            inputTag.disabled = true;
         } 
})
 }) ; 
 

startListBtn.addEventListener("click", createList);
progListBtn.addEventListener("click", createList);
compListBtn.addEventListener("click", createList);

//
