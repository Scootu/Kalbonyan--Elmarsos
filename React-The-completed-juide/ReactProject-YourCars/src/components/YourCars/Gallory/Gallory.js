import Button from '../../UI/Button';
import classes from './Gallory.module.css' ; 

const Gallory = () => {
  
    return (
        <section className={classes.main} >
               <img className={classes.galloryImg} src='/images/GalloryImg/Car.png' alt='pochaty in the sahara'/>
               <img className={classes.galloryImg} src='/images/GalloryImg/porsche-911.png' alt='porsche in the sahara'/>
               <img className={classes.galloryImg} src='/images/GalloryImg/HardCar.png' alt='pochaty in the sahara'/>
               <img className={classes.galloryImg} src='/images/GalloryImg/boghaty.png' alt='pochaty in the sahara'/>
               <div className={classes.galloryMid}>
                 <p>Tesla module 3</p>
                 <span>Disruptive,avant-garde,futuristic,innovative.</span>
                 <Button className={classes.Button} >Contact</Button>
               </div>
               <img className={classes.galloryImg} src='/images/GalloryImg/AstenMartenSpeedNew.png' alt='pochaty in the sahara'/>
               <img className={classes.galloryImg} src='/images/GalloryImg/AstenMartenM.png' alt='pochaty in the sahara'/>
               <img className={classes.galloryImg} src='/images/GalloryImg/AstenMarten.png' alt='pochaty in the sahara'/>
               <img className={classes.galloryImg} src='/images/GalloryImg/Car.png' alt='pochaty in the sahara'/>
        </section>
    )
}
export default Gallory ; 