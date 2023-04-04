const container = document.querySelector('.row-container');
const row = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count'),
    total = document.getElementById('total');
let optVal = document.getElementById('pickMovie');

// populate the uI 


let seats = JSON.parse(localStorage.getItem('seats') || '[]');
let length = seats.length;
//for the first time the website run ! 
let ticketPrice = localStorage.getItem('selectedMovieValue') || 10 ;
let selectedMovieIndex = localStorage.getItem('selectedMovie') || 0;

populatUI();

showResultText(length);




function populatUI() {
    // update the pickMovie ! 
    optVal.selectedIndex = selectedMovieIndex;
    // show up selected seats ! 
    [...row].forEach((seat, index) => {
        if (seats.indexOf(index) != -1) {
            seat.classList.add('selected');
            //   console.log(seat,index);
        }
    })

}
// i don't know why the index and seat is consistent every time , i build this for work one , but whan the eventListener work it's assigning the true index ? without iterating again ?
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
        //update function 
        updateSeatsFunction();

    }

})

function updateSeatsFunction() {
    // get the value from the dom and replave it with the seats array 
    let seatsSelected = Array.from(document.querySelectorAll('.row .seat.selected'));
    seats = [...row].map((seat, index) => { // a way for found the index and delete the outer element
        if (seatsSelected.indexOf(seat) !== -1) {
            return index;
        }

    }).filter(elem => elem !== undefined);
    // console.log(arr);
    localStorage.setItem('seats', JSON.stringify(seats));
    showResultText();

}

function showResultText() {
    let length = seats.length ; 
    //options[this.selectedIndex] 
    count.textContent = length;
    total.textContent = length * ticketPrice;
    //console.log('change');
}




optVal.addEventListener("change", (e) => {
    
    ticketPrice = +optVal[e.target.selectedIndex].value; // update the value

    localStorage.setItem('selectedMovieValue', ticketPrice);
    localStorage.setItem('selectedMovie', e.target.selectedIndex);

    showResultText();
    //console.log('CHANGED');
}); 