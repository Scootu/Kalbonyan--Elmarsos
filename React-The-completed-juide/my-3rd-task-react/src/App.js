import React ,{useEffect , useState} from 'react';

import './App.css';

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    fetch('data.json',{
      headers: {
        "Content-Type": "application/json"
      }
     }).then((res)=>{
       return res.json();
     }).then((myjson)=>{
        console.log(myjson);
        setData(myjson);
     })
  }
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure effect runs only once

  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
