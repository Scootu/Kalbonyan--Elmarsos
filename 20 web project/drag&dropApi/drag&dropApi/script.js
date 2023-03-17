const draglist = document.getElementById('draglist'),
   checklist = document.getElementById('check');

// the richest people 

const richestPeople = [
   'Bill Gates',
   'warren Buffett',
   'Jeff Bezos',
   'Larry Ellison',
   'Larry Page',
   'Bernard Arnault',
   'Mark Zuckerberg',
   'Sergey Brin',
   'Amancio Ortega',
   'Elon Musk'
];
// standared  element 
let userArrRichestPeople = [];
// standared start index 
let userStartIndex;
// create a Richest People html 
createUserList();

// get a random list and show it one time at the page 
function createUserList() {
   userArrRichestPeople = richestPeople
      .slice()
      .map((a) => {
         return { value: a, sort: Math.random() };
      })
      .sort((a, b) => {
         return a.sort - b.sort; // =0 no , <0 before, >0 after 
      });
   userArrRichestPeople.forEach((item, index) => {
      console.log(item);
      let litTag = `<li>
      <div class="number">${index + 1}</div>  
      <div class="draggable" draggable = "true" >
      <p>${item.value}</p>
      <span class="material-symbols-outlined">menu</span>
      </div>
      </li>` ;

      // set attribute 
      //litTag.setAttribute('data-index',index);
      // draglist.insertAdjacentElement('beforeend',litTag);
      draglist.insertAdjacentHTML('beforeend', litTag);
   });
    
   addEventListener();
}



function dragStart() {

   let firstElem = this.firstElementChild.textContent;
   userStartIndex = userArrRichestPeople.findIndex((elem) => {
      return elem.value == firstElem ;
   });
    //for the index we can use a data- attribute to store the index of the element . 
    //getAttributes() ;
   console.log('Event : dragstart');
}

function dragOver(event) {
   event.preventDefault();
   console.log('Event :dragOver');
}
function dragLeave() {
   //console.log('Event : ','dragleave');
   this.classList.remove('over');
}
function dragEnter() {
   //console.log('Event ','dragEnter');
   //  elem.target.style.background = 'red';
   this.classList.add('over');
}
function dragDrop() {
  //why drop because it's the last of a cyble (dropstart.....dropend);
   console.log('Event ', 'dragDrop');
   //elem.target.style.background = 'green';
   this.classList.remove('over');
   let element = this.firstElementChild.textContent;

   const userEndIndex = userArrRichestPeople.findIndex((elem) => {
      return elem.value == element ;
   });
   // this not work : console.log(dragListItems.querySelector('.draggable')) ;
   swapItems(userStartIndex,userEndIndex);
   console.log(userEndIndex);
   
}
function swapItems(fromIndex,toIndex) {
  let dragItem =  document.querySelectorAll('.draggable') ;

  let fromIndexItem = dragItem[fromIndex].firstElementChild.textContent ;
  let toIndexItem = dragItem[toIndex].firstElementChild.textContent ;
   /*
     let fromIndexItem =  
   */
   

  dragItem[fromIndex].firstElementChild.textContent = toIndexItem ; 
  dragItem[toIndex].firstElementChild.textContent  = fromIndexItem ;
   
}
function addEventListener() {
   const draggables = document.querySelectorAll('.draggable'),
      dragListItems = document.querySelectorAll('.drag-list li ');


   draggables.forEach((draggable) => {
      draggable.addEventListener('dragstart', dragStart);
      draggable.addEventListener('dragover', dragOver);
      draggable.addEventListener('dragleave', dragLeave);
      draggable.addEventListener('drop', dragDrop);
      draggable.addEventListener('dragenter', dragEnter);
   
   });
   dragListItems.forEach((item) => {

   })

}