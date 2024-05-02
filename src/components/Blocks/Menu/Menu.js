import {NavLink} from "react-router-dom";

import classes from "./menu.module.css";

const Menu = ({isActive, place}) => {
    if (place === 'footer') {
        return <ul className={`${classes.menu} ${classes.footer__menu}`}>
            <li className={classes.item}>
                <NavLink to={"/about"} className={classes.link}>О нас</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/services"} className={classes.link}>Услуги</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/objects"} className={classes.link}>Объекты</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/news"} className={classes.link}>Новости</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/contacts"} className={classes.link}>Контакты</NavLink>
            </li>
        </ul>
    } else {
        const activeClass = isActive ? `${classes.active}` : ''
        return <ul className={`${classes.menu} ${classes.header__menu} ${activeClass}`}>
            <li className={classes.item}>
                <NavLink to={"/"} className={`${classes.link} ${activeClass}`}>Главная</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/about"} className={`${classes.link} ${activeClass}`}>О нас</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/services"} className={`${classes.link} ${activeClass}`}>Услуги</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/objects"} className={`${classes.link} ${activeClass}`}>Объекты</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/news"} className={`${classes.link} ${activeClass}`}>Новости</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to={"/contacts"} className={`${classes.link} ${activeClass}`}>Контакты</NavLink>
            </li>
        </ul>
    }
}

export default Menu;