import { useState } from "react";
import SmallInput from "./SmallInput";
import classes from "./slip.module.css";


const Slip = (props) => {

  const [isValid, setIsValid] = useState(true);

  const deleteSlip = () => {
    props.data.value = 0;
    setIsValid(false);
    // saveInLocalStorage(); 
    
  }

  return (
    <div className={`${isValid ? classes.visible : classes.hidden} ${classes.main}`}>
      <div className={classes.text}>
        <p className={classes.mainText}>{`${props.data.class}`}</p>
        <span className={classes.subText}>{`${props.data.name}`}</span>
        <div className={classes.bottom}>
          <SmallInput datas={props.data} valide ={isValid}/>
          <span className='material-symbols-outlined' onClick={deleteSlip}>delete</span>
        </div>
      </div>
      <div className={classes.img}>
        <img src={props.data.image} alt={props.data.name} />
      </div>
    </div>
  );
};

export default Slip;
