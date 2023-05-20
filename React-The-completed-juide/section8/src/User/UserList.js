import React ,{useState}from "react";
import AddUser from "./AddUser.js";
import styled from './UserList.module.css';
import Card from "../UI/Card.js";
import RendredList from "./RendredList.js";
import ErrorHandler from "./ErrorHandler.js";

const UserList = () => {

  const [addForm,setAddForm] = useState([]);
  const [isError,setIsError] = useState(false);
  const getUserData = (expens) => {
        setAddForm(prevForm => [expens,...prevForm]);
        
  };
  const setIsErrorAnsFalse = () => { 
        setIsError(false);
  }
  const setIsErrorAnsTrue = () => { 
        setIsError(true);
  }

  return (
    <React.Fragment>
      {isError && <ErrorHandler onGetAns= {setIsErrorAnsFalse}/>}
      <AddUser setGetUserData={getUserData}  onGetAns={setIsErrorAnsTrue}/>
      <Card className={styled.users}>
           <RendredList onAddFormArr ={addForm}/>
      </Card>
    </React.Fragment>
  );
};
export default UserList;
