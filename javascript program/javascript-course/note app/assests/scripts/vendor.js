const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector(".popup-box"),
popupTitle =document.querySelector('header p'),
closeIcon = popupBox.querySelector('header i'),
titleTag = popupBox.querySelector('.input'),
descTag = popupBox.querySelector('.textarea'),
addBtn = popupBox.querySelector('button'),
settingbtn = document.body.querySelector('.settingBtn');


const mounths = ["January","February",'March',"April","May",'June','July',
"August","Septmber","October","Novermber","December"];

// control in the textarea 
const textarea = document.body.getElementsByClassName('textarea')[0];
textarea.focus(); // Set focus to the textarea
textarea.setSelectionRange(0, 0);

addBox.addEventListener("click",()=> { 
   //titleTag.focus();
  
  popupBox.classList.add('show');
   
});
let isUpdate =false , updated ; 
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
   let i = 0 ; 
   notes.forEach((note)=> {
      
      let liTag =`<li class="note">
                     <p>${note.title}</p>
                     <div class="details">
                         <span>${note.description}</span>
                     </div>
                       <div class="bottom-content">
                            <span>${note.date}</span>
                         <div class="settings">
                          <div class="settingBtn">
                            <div class="btnSetting edite" onclick="nodeEdite(${i},'${note.title}','${note.description}')">Edit</div>
                            <div class="btnSetting delet" onclick="showDelete(${i})">Delet</div>
                          </div>
                            <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        </div>
                      </div>
                  </li>`  ; 
            i++;
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
     let isConfirm = confirm('Are you sure you want to delete this note?');
     if(!isConfirm) return ; 
     //removing the note and do i update 
     notes.splice(nodeId,1);
     //Saving this in a localStorage 
     localStorage.setItem("notes",JSON.stringify(notes));
     //update 
     showNotes(notes);
}

function nodeEdite(nodeId,title,desc) {
      isUpdate = true ; 
      updated = nodeId ;
      addBox.click();
      titleTag.value = title ; 
      descTag.value = desc ; 
      addBtn.innerHTML = 'Update Note';
      popupTitle.innerHTML = 'Update a Note';
      console.log(nodeId,title,desc);
}

closeIcon.addEventListener("click",()=> { 
    isUpdate = false;
    titleTag.value ='';
    descTag.value ='' ;
    addBtn.innerHTML = 'Add Note';
    popupTitle.innerHTML = 'Add a Note';
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
         date:`${mounth} ${day} ,${years}`,
      }
      if(isUpdate === false) { 
      //saving note to a new array 
      console.log('add note');
      notes.push(noteInfo); 
      }else { 
         isUpdate =false ; 
         console.log('edite note');
         notes[updated] = noteInfo ;
      }
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
