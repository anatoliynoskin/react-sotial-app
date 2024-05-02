import {NavLink} from "react-router-dom";
import classes from "./hero.module.css";

const Hero = () => {
    return  <section className={classes.hero}>
        <div className={classes.textBlock}>
            <h2 className={classes.subtitle}>Архитектурное бюро</h2>
            <h1 className={classes.title}>АСК НОРД</h1>
            <NavLink to={"/about"} className={`${classes.link} arrow-link`}>О нас</NavLink>
        </div>
    </section>
}

export default Hero;