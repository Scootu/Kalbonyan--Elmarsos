 //  OOP MODEL FOR BOOK LIST 
 // book class : for add book 
class Book { 
  
    constructor(titel,author,isbn){ 
        this.titel = titel ; 
        this.author = author ; 
        this.isbn = isbn ; 
    }
}
let obj = [] ; 
 // UI Book : show up the element to the dom 
class UI { 
   // display books in the dom 
   static displayBooks() { 

      // array have different books data ()
      const Books = obj ; 
     
     Books.forEach((book)=> UI.addBookToList(book));

   }

   static addBookToList(book){
       
       let index = Math.random();

       const bookTitle = document.querySelector('.title');
       const bookAuthor= document.querySelector('.Author'); 
       const bookISBN = document.querySelector('.ISBN') ; 
       const bookRemove = document.querySelector('.icon');
       // create the element and append it to the dom 
       let pTitle = document.createElement('p');
       let pAuthor = document.createElement('p');
       let pISBN = document.createElement('p');
       
       let icon = document.createElement('a');
       let br = document.createElement('p');
       // br style 
       br.style.height = '10px';
       br.style.width = '100%' ;
       br.style.backgroundColor = '#fff';
       // class 

       pTitle.className = 'item';
       pAuthor.className ='item';
       pISBN.className = 'item';
       icon.className = 'remove' ; 

       // data index for removing  
       pTitle.setAttribute('data-index',index);
       pAuthor.setAttribute('data-index',index);
       pISBN.setAttribute('data-index',index);
       icon.setAttribute('data-index',index);
       icon.setAttribute('herf','#');
       // inner html 
       pTitle.innerHTML = `${book.titel}`;
       pAuthor.innerHTML = `${book.author}`;
       pISBN.innerHTML = `${book.isbn}`;
       icon.innerHTML = 'remove'; 
       // element content 

       bookTitle.appendChild(pTitle);
       bookAuthor.appendChild(pAuthor);
       bookISBN.appendChild(pISBN);
       bookRemove.appendChild(icon);

       //br 
       
       
       
   }
   static clearInputs() { 
    document.querySelector('#title').value = '' ; 
    document.querySelector('#author').value = '' ; 
    document.querySelector('#isbn').value = '' ; 

   }
   static removeBook() { 
    const deleteBooks = document.querySelectorAll('.grid p');
    deleteBooks.forEach(elem => elem.remove());
   }
  }
 
 // Store Class : Handles Storage
     class Store {
        
       /*
       static saveBookToList() { 
          const arrBookValue = Array.from(document.querySelectorAll('.form-item')).map((elem)=>{ 
            return elem.lastElementChild.value ; 
          })
          
          obj.push(new Book(arrBookValue[0],arrBookValue[1],arrBookValue[2]));
          console.log(obj);
          localStorage.removeItem('book');
          localStorage.setItem('book',JSON.stringify(obj));
          UI.removeBook();
          UI.displayBooks();
       }
        
      */

     }
 // Event : Display Books 
 document.addEventListener('DOMContentLoaded',UI.displayBooks);
 // Event : Add a Book 
 // document.querySelector('.addBtn').addEventListener('click',Store.saveBookToList); this is my stuped
document.querySelector('.addBtn').addEventListener('click',(e)=> { 
  e.preventDefault(); 

  const title =  document.getElementById('title').value ; 
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const book = new Book(title,author,isbn); 
  console.log(book);

  UI.addBookToList(book);

  //Clear atributes 
//  UI.clearInputs();
}) 
 // Event : Remove a Book 

 document.querySelector('.grid').addEventListener('click',(e)=> { 
   let index = e.target.getAttribute('data-index');
    if(e.target.nodeName == 'A') {  
     console.log(e.target);
     e.target.remove();
     document.querySelectorAll('.grid p').forEach((elem)=>  {
         if(elem.getAttribute('data-index') == index) { 
          elem.remove();
         }

    })
    }

 })