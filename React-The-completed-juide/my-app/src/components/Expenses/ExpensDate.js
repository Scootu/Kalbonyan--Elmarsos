
import './ExpensDate.css'

function ExpensDate(props) {

  let month = props.date.toLocaleString("en-US", { month: "long" });
  // let month = props.date.getMonth();
  let day = props.date.getDay();
  let year = props.date.getFullYear();

  return (
    <div className="date-container">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpensDate;
