const row = document.querySelectorAll('.row .seat');
let count = document.getElementById('count'),
    total = document.getElementById('total');
let optVal = document.getElementById('pickMovie');

let seats = [];



seats = JSON.parse(localStorage.getItem('seats') || '[]');
let length = seats.length;

showResultText(length);

let selectSeats = JSON.parse(localStorage.getItem('seats') || '[]');
selectSeats.forEach((seat) => {
    row[seat.index].classList.add('selected');
})

//console.log(selectSeats);
row.forEach((seat, index) => {
    // i don't know why the index and seat is consistent every time , i build this for work one , but whan the eventListener work it's assigning the true index ? without iterating again ?
    seat.addEventListener('click', (e) => {
        let elem = {
            index: index,
            /* seat:seat */ // i don't know why he don't save the seat element 
        }
        
        if (!seat.classList.contains('selected')) {
            seat.classList.add('selected');

            seats.push(elem);
            localStorage.setItem('seats', JSON.stringify(seats));
            let length = seats.length;
           

            showResultText(length);
            // console.log('click', elem);

        } else if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            //console.log(elem.index,seat);
            let indSeat = seats.findIndex((e) => {
                return e.index === elem.index;
            });
            console.log(seats,indSeat);
            if (indSeat){ 
                seats.splice(indSeat, 1);
            }else if(indSeat === 0) { 
                seats.splice(0,1);
            }
                console.log(seats,indSeat);
                localStorage.setItem('seats', JSON.stringify(seats));
                let length = seats.length;
               
                showResultText(length);
                
            
            //console.log(indSeat);
        }

       

    })
})


function showResultText(length) {
    let optVal = document.getElementById('pickMovie').selectedOptions[0].value;
    //options[this.selectedIndex] 
    count.textContent = length;
    total.textContent = length * optVal;
    //console.log('change');
}


const selectElement = document.getElementById("pickMovie");

selectElement.addEventListener("change", function () {
    let length = seats.length;
    /*
    const selectedOption = this.options[this.selectedIndex].value;
    count.textContent = length;
    total.textContent = length * selectedOption;
    */
    showResultText(length);
    //console.log('CHANGED');
});