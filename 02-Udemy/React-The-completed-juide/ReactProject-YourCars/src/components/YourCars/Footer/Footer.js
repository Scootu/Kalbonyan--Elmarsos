import React from "react";

import classes from './Footer.module.css';
import Button from "../../UI/Button";

const Footer = () => {
    return (
        <section className={classes.main} >

            <div className={classes.patrent}>
                <img className={classes.imgPatrent} src='/images/patrenes/BMW.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/Volvo_logo1 1.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/Suzuki_logo_21.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/Toyota_EU1.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/Nissan_2020_logo.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/Mercedes-Benz_free_logo.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/image262.png' alt="just a car " />
                <img className={classes.imgPatrent} src='/images/patrenes/Vector(2).png' alt="just a car " />
            </div>

            <footer className={`container ${classes.mainFooter}`} >
                <div className={classes.logoElem}>
                    <div className={classes.footerLogo}>
                        <span className={classes.your}>Your</span>
                        <span>Cars</span>
                    </div>

                    <p>We are known for luxurious and premium chaffeur services worldwide.We are simply the best<br></br>you can find.</p>
                    <p>we are dedicated to providing our customers with a first-class car buying,selling,and renting experence.</p>

                </div>
                <div className={`${classes.flex} ${classes.newLetter}`}>
                    <span className={classes.footerLogo}>News Letter</span>
                    <p>Subcribe to our news letter for updates, news and exclusive offers</p>

                    <form>
                        <input type="email" className={classes.formInut} placeholder="Email" />
                        <Button className={classes.btn} >Subscribe</Button>
                    </form>
                    <div className={classes.socialMedia}>
                        <img className={classes.icons} src='/images/social_Icons/facebook.png' alt="icon facebook" ></img>
                        <img className={classes.icons} src="/images/social_Icons/instragram.png" alt="twitter icon "></img>
                        <img className={classes.icons} src="/images/social_Icons/twitter.png" alt="instragram icon "></img>
                    </div>
                </div>
                <div className={`${classes.flex} ${classes.contact}`} >
                    <p className={classes.footerLogo}>Contact</p>
                    <div className={`${classes.flex} ${classes.contactInfo}`}>
                        <div>
                            <img className={classes.contactIcon} src="/images/contact_Icons/Vector1.png " alt="contact icon " />
                            <p>2038 2nd Avenue <br></br>Las Vegas, United States</p>
                        </div>
                        <div>
                            <img className={classes.contactIcon} src="/images/contact_Icons/Vector2.png" alt='contact icon ' />
                            <p>01444773421423<br></br>01477678449405</p>
                        </div>
                        <div>
                            <img className={classes.contactIcon} src="/images/contact_Icons/Vector3.png"alt='contact icon '/>
                            <p>info@YourCar.com</p>
                        </div>
                    </div>
                </div>

            </footer>
            <div className={classes.endSection}> 
                <hr></hr>
                <p>&copy; Copyright 2023 .<strong>YourCar</strong> All rights reserved.</p>
            </div>
        </section >
    );
}

export default Footer;