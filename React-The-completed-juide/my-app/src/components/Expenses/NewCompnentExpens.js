import Card from "../UI/Card";
import ExpensItem from "./ExpensItem";
import './NewCompnentExpens.css' ; 
function RenderExpens(props) {
  // this is an array
  console.log(props.item);
  return (
    <Card className="expenses">
      <ExpensItem
        title ={props.item[0].title }
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
       <ExpensItem
        title ={props.item[1].title }
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
       <ExpensItem
        title ={props.item[2].title }
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
    </Card>
  );
}
export default RenderExpens;
