const addBtn = document.querySelector('.btn'); 
const container = document.querySelector('.blackCard'),
      filterBtn = document.getElementById('filterBtn');
 

// Rendering Elements based on Objects
let card = [];
const renderMovie = (filterText) => { 
    const movieList = document.querySelector('.movie-list');

    if(card.length == 0){ 
       movieList.classList.remove('visibility');
    }else { 
       movieList.classList.add('visibility'); 
    }
    movieList.innerHTML = ""; 
    console.log(filterText);

    let movieFilterd = !filterText ? 
      card : 
      card.filter( item => item.info.description.includes(filterText) );

    console.log(movieFilterd);
     
    movieFilterd.forEach((elem)=> { 

         let liTag = document.createElement('li');
         let textdes = document.createTextNode('the description : ' + elem.info.description);
         let textans = document.createTextNode('the answer : ' + elem.info.answeres);
         let br = document.createElement('br');
         liTag.appendChild(textdes);
         liTag.appendChild(br);
         liTag.appendChild(textans);
          
         movieList.appendChild(liTag);
         console.log(liTag);
    })
  
}
const addMovieHandler = () =>  { 
    let desc = document.getElementById('card-desc').value;
    let answer = document.getElementById('card-answer').value;
    if(desc.trim() == "" || answer.trim() == ""){ 
        return ;
    }
    const id =  Math.random(); 
    const subject = { 
        info : { 
        description : desc , 
        answeres : answer
        },
        
    }
    Object.defineProperty(subject,'id',{
        configurable:false,
        enumerable:false,
        get :()=> { 
            return id; 
        },
        set() { 
        } // or we can use writable false in data property 
    })
    // for example : 
   // let text  = subject.info.description ,
    //asa = subject.info.answeres ; 
    // we can right this in desctrected pattern binding pattern like : 
    let {description: text,answeres:asa} = subject.info ;
    console.log('Destructuring pattern :', text,asa); 
    console.log('Checking for Property Existance ','info' in subject);
    card.push(subject);

   // console.log(card);
    renderMovie();
    
}
const searchMovieHandler = () => { 
    let filterText = document.getElementById('filter').value ; 
    renderMovie(filterText); 
}
addBtn.addEventListener('click',addMovieHandler);
filterBtn.addEventListener('click',searchMovieHandler);