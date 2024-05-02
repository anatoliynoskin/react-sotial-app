import classes from "./burger.module.css";
const Burger = ({isActive, showMobileMenu, hideMobileMenu}) => {
    const activeClass = isActive ? classes.active : '';
    return <div className={`${classes.burger} ${activeClass}`} onClick={() => {isActive ? hideMobileMenu() : showMobileMenu();}}>
        <div className={`${classes.line} ${activeClass}`}></div>
        <div className={`${classes.line} ${activeClass}`}></div>
        <div className={`${classes.line} ${activeClass}`}></div>
    </div>
}

export default Burger;