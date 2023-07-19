
import React , {useState} from 'react';
import './ExpensItem.css' ;
import ExpensDate from './ExpensDate';
import Card from '../UI/Card';
// the parameter of the ExpensItem() function , React convert it to a object 
function ExpensItem(props) {
    // we use HOOks for re-evaluated this function 
     const [title,setTitel] = useState(props.title) ;  
    const clickHandler = () => { 
        setTitel('updated !'); // this don't change the value of title or props.title , but it's take the modifeid value and after change the dom it's return the value to the bervios value 
       // console.log(title);
        //console.log(props.title);
    }
    return (
        <Card className="extandContainer">
            <ExpensDate date = {props.date} ></ExpensDate>
            <div className='extandSlide'>
                <h2>{title}</h2>
                <div className='extandElement'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Click !</button> */}
        </Card>
    ) ; 
}

export default ExpensItem ;