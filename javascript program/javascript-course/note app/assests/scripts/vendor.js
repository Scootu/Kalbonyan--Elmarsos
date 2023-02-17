const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector('header i'),
titleTag = popupBox.querySelector('.input'),
descTag = popupBox.querySelector('.textarea'),
addBtn = popupBox.querySelector('button'),
settingbtn = document.body.querySelector('.settingBtn'),
iconSetting = document.body.querySelector('.uil.uil-ellipsis-h');

addBox.addEventListener("click",()=> { 
   popupBox.classList.add('show');
  
});

closeIcon.addEventListener("click",()=> { 
    popupBox.classList.remove('show');
 });

 addBtn.addEventListener('click',()=> { 
   console.log(`input :${titleTag.value} , description : ${descTag.value}`);
 });

 iconSetting.addEventListener('click',()=> {
   /*
   timerId = setTimeout(()=> {
      settingbtn.classList.add('show');
      clearTimeout(timerId);
   },300); 
   */
   settingbtn.classList.remove('show');
   console.log(`${iconSetting}`);
 });
