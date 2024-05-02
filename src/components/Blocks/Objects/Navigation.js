import classes from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const Navigation = ({nextSlide, prevSlide}) => {
    return <div className={classes.nav}>
        <div className={classes.buttons}>
            <button className={classNames(classes.button, classes.button_reverse)} onClick={prevSlide}>
                <svg width="8" height="14" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.059886 8.66766C-0.0203328 8.74325 -0.0207081 8.86629 0.0589485 8.94223C0.138793 9.01834 0.26868 9.0187 0.348899 8.94311L4.93918 4.63717C5.01921 4.56159 5.01978 4.43854 4.93993 4.36243L0.348899 0.0559604C0.26868 -0.0196255 0.138793 -0.019274 0.0589485 0.0568393C-0.0207081 0.132777 -0.0203328 0.255824 0.059886 0.33141L4.50323 4.49936L0.059886 8.66766Z" fill="black"/>
                </svg>
            </button>
            <button className={classes.button} onClick={nextSlide}>
                <svg width="8" height="14" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.059886 8.66766C-0.0203328 8.74325 -0.0207081 8.86629 0.0589485 8.94223C0.138793 9.01834 0.26868 9.0187 0.348899 8.94311L4.93918 4.63717C5.01921 4.56159 5.01978 4.43854 4.93993 4.36243L0.348899 0.0559604C0.26868 -0.0196255 0.138793 -0.019274 0.0589485 0.0568393C-0.0207081 0.132777 -0.0203328 0.255824 0.059886 0.33141L4.50323 4.49936L0.059886 8.66766Z" fill="black"/>
                </svg>
            </button>
        </div>
        <NavLink to={'/objects'} className={classes.link}>Другие объекты</NavLink>
    </div>
}

export default Navigation;