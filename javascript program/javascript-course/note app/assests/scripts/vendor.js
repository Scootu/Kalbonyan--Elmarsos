const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector('header i'),
titleTag = popupBox.querySelector('input'),
descTag = popupBox.querySelector('textarea');
addBtn = popupBox.querySelector('button');

addBox.addEventListener("click",()=> { 
   popupBox.classList.add('show');
});

closeIcon.addEventListener("click",()=> { 
    popupBox.classList.remove('show');
 });

 addBtn.addEventListener('click',()=> { 
    console.log('Add a Note !');
 });