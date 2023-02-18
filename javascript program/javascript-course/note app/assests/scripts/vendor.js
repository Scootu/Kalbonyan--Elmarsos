const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector('header i'),
titleTag = popupBox.querySelector('.input'),
descTag = popupBox.querySelector('.textarea'),
addBtn = popupBox.querySelector('button'),
settingbtn = document.body.querySelector('.settingBtn');


const mounths = ["January","February",'March',"April","May",'June','July',
"August","Septmber","October","Novermber","December"];

addBox.addEventListener("click",()=> { 
   popupBox.classList.add('show');
  
});
// i need the data i stored in localStorage 

let notes = [] ; 

if(localStorage.getItem('notes')) { 
   notes = JSON.parse(localStorage.getItem('notes')) ;
   //show notes    
   showNotes(notes);
} else { 
   notes = [''];
}

function showNotes(notes) { 
   document.querySelectorAll('.note').forEach(note => note.remove());//this is the answeres it's remove the old and build all the notes 
   notes.forEach((note,index)=> { 
      let liTag =`<li class="note">
                     <p>${note.title}</p>
                     <div class="details">
                         <span>${note.description}</span>
                     </div>
                       <div class="bottom-content">
                            <span>${note.date}</span>
                         <div class="settings">
                          <div class="settingBtn">
                          <div class="btnSetting edite">Edit</div>
                            <div class="btnSetting delet" onclick="showDelete(`${index}`)">Delet</div>
                          </div>
                            <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        </div>
                      </div>
                  </li>`  ; 
    addBox.insertAdjacentHTML('afterend',liTag); 

   });
   
}
function showMenu(elem) {
     elem.previousElementSibling.classList.add('show');
     document.addEventListener('click',e => { 
      // removing show class from the settings menu on document click
      if(e.target.tagName != "I" || e.target != elem) { // if is a icon or the element it self 
         elem.previousElementSibling.classList.remove('show');
      }
     })
}
function showDelete(nodeId) {
     console.log('this is true ');
}


closeIcon.addEventListener("click",()=> { 
    titleTag.value ='';
    descTag.value ='' ;
    popupBox.classList.remove('show');
 });

 addBtn.addEventListener('click',()=> { 
   let noteTitle = titleTag.value,
   noteDesc = descTag.value;
   if(noteTitle || noteDesc) { // if noteTitle or noteDesc == false this don't executed 
     //get day and mounth and years for dataObj 
      let dateObj = new Date();
      let day = dateObj.getDay() ; 
      let mounth = mounths[dateObj.getMonth() -1] ;  
      let years = dateObj.getFullYear();

      //create a note obj to save this data 
      let noteInfo = { 
         title:noteTitle ,
         description:noteDesc , 
         date:`${mounth} ${day} ,${years}`
      }
      
      //saving note to a new array 
      console.log('add note');
      notes.push(noteInfo); 

      //saving this in a localStorage 
      localStorage.setItem("notes",JSON.stringify(notes));

     

   
   }
   showNotes(notes);
   /*
    titleTag.value ='';
    descTag.value ='' ;
    popupBox.classList.remove('show');
   */
  closeIcon.click();
 });

 /*
 iconSetting.addEventListener('click',()=> {
   
  
   timerId = setTimeout(()=> {
      settingbtn.classList.add('show');
      clearTimeout(timerId);
   },300); 
  
   settingbtn.classList.remove('show');
   console.log(`${iconSetting}`);
 });

  */
