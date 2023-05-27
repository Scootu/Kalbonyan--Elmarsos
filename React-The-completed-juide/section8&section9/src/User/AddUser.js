import React ,{useRef} from "react";
import Button from '../UI/Button';
import styled from './AddUser.module.css';
import Card from "../UI/Card";

const AddUser = (props) => {

const nameUser =  useRef();
const ageUser = useRef();

const addUserForm = (event) =>  {
  const entredName = nameUser.current.value ;
  const entredAge = ageUser.current.value ;  
   event.preventDefault(); 
    
   if(entredName.trim().length === 0 || entredAge.trim().length === 0 || +entredAge < 1) {
      props.onGetAns();
      return ; 
   }
   console.log(entredName , entredAge);
   props.setGetUserData({id:Math.random().toString() ,name:entredName , age:entredAge});
   nameUser.current.value = '' ; 
   ageUser.current.value = '' ; 
   
}

    return (
    <Card >
     <form onSubmit={addUserForm} className={styled['form-control']}>
       <label>UserName</label>
       <input type="text" ref={nameUser} />
       <label>Age(years)</label>
       <input type="number" ref={ageUser}/>
      <div> 
       <Button type={'submit'}>Add User</Button>
      </div>
     </form> 
     
     </Card>  
    );
}
export default AddUser ; 