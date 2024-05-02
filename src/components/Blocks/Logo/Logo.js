import {NavLink} from "react-router-dom";
import headerLogo from "../../../images/logo.svg"
import footerLogo from "../../../images/logo_footer.svg"
import classes from "./logo.module.css";
import classNames from "classnames";

const Logo = ({place}) => {
    return <NavLink to={"/"} className={classes.logo}>
        <img src={place === 'footer'? footerLogo: headerLogo} alt="logo" className={classes.img} />
        <span className={place === 'footer'? classNames(classes.text, classes.footerText): classes.text}>АСК НОРД</span>
    </NavLink>
}

export default Logo;