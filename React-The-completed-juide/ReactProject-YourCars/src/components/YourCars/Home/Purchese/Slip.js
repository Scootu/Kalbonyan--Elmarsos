import { useContext, useState } from "react";
import SmallInput from "./SmallInput";
import classes from "./slip.module.css";
import CardDataContext from "../../../../Context/CardData";

const Slip = (props) => {
  const ctx = useContext(CardDataContext);
  const [isValid, setIsValid] = useState(true);

  const saveInLocalStorage = () => { // modify make it save directly in the dataSource cars 
    const dataArr = JSON.parse(localStorage.getItem('dataCars'));
    if (dataArr.length === 6) {
      console.log(dataArr, props.data.index);
      dataArr[props.data.index].value = 0;
      localStorage.setItem('dataCars', JSON.stringify(dataArr));
      console.log('good', dataArr);
    }

  }
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
