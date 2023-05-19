import React ,{useState} from "react";
import Button from '../UI/Button';
import styled from './AddUser.module.css';
import Card from "../UI/Card";

const AddUser = (props) => {

const [modUserName,setUserName] = useState('');
const [modUserAge,setUserAge] =useState('');

const addUserForm = (event) =>  { 
   event.preventDefault(); 
    
   if(modUserName.trim().length === 0 || modUserAge.trim().length === 0 || +modUserAge < 1) {
      props.onGetAns();
      return ; 
   }
   console.log(modUserName , modUserAge);
   props.setGetUserData({id:Math.random().toString() ,name:modUserName , age:modUserAge});
   setUserName('');
   setUserAge('');
}

const userNameChangeHandler = (event) => { 
  setUserName(event.target.value);
} 
const userAgeChangeHandler = (event) => { 
  setUserAge(event.target.value);
}

    return (
    <Card >
     <form onSubmit={addUserForm} className={styled['form-control']}>
       <label>UserName</label>
       <input type="text" value={modUserName} onChange={userNameChangeHandler}  />
       <label>Age(years)</label>
       <input type="number" value={modUserAge} onChange={userAgeChangeHandler} />
      <div> 
       <Button type={'submit'}>Add User</Button>
      </div>
     </form> 
     
     </Card>  
    );
}
export default AddUser ; 