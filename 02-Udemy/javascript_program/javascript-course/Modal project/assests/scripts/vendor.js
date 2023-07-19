const modulBtn = document.querySelector('.btn');
const modulContainer = document.querySelector('.modul-container');
const closeBtn = document.querySelector('.close');

/* Modul show */ 

let showModel = function() { 
    modulBtn.addEventListener('click',() => { 
      modulContainer.classList.remove('fade-out');
      
    });
    closeBtn.addEventListener('click',() => { 
      modulContainer.classList.add('fade-out');
    });
}

showModel();