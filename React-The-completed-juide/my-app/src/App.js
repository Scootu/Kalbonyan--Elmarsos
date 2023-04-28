import "./App.css";
import NewExpenses from './components/NewExpenses/NewExpenses'; 
import RenderExpens from "./components/Expenses/NewCompnentExpens";

function App() {
  let extanded = [
    { 
      title: "Car insurances", 
      amount: "297.5", 
      date: new Date(2022,8,10,12,45,15,45)  
    },
    { 
      title: "MBC 2 : the avenger dark of syfnie", 
      amount: "200", 
      date: new Date(2023, 6, 10) 
    },
    { 
      title: "The Rook", 
      amount: "100", 
      date: new Date(2020, 7, 10) 
    }
  ]; 
  return (
    // put attribute for make the component dynamic !
    <div className="container"> 
     <NewExpenses />
     <RenderExpens item = {extanded}/>
    </div>
     
  );
}

export default App;
