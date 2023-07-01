import classes from './Client.module.css';


const Client = (props) => {
    console.log(props);
    return (

        <div className={classes.main}>
            <p>{props.description}</p>
            <div className={classes.imgStartContainer}>
                {/* <span className="material-symbols-outlined">
                    star
                </span> */}
                <img className={classes.star} src="images/start.png" alt='is a stars'/>
            </div>
            <div className={classes.footer}>
                <span>{props.name}</span>
                <span>{props.location}</span>
            </div>
            {/* <div className={classes.imgContainer}> */}
                <img className={classes.imgCorner} src={props.image} alt='just a car' />
            {/* </div> */}
        </div>


    );
}
export default Client; 