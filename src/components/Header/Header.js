import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Menu from "../Blocks/Menu/Menu";
import Logo from "../Blocks/Logo/Logo";
import Burger from "../Blocks/Menu/Burger";

import classes from './header.module.css';

const Header = (props) => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    function showMobileMenu() {
        setMobileMenuActive(true);
    }

    function hideMobileMenu() {
        setMobileMenuActive(false);
    }

    const location = useLocation();

    useEffect(() => {
        hideMobileMenu();
    }, [location]);

    return <header className={classes.header}>
        <Logo />
        <Menu isActive={mobileMenuActive} place="header"/>
        <Burger isActive={mobileMenuActive} hideMobileMenu={hideMobileMenu} showMobileMenu={showMobileMenu}/>
    </header>
}

export default Header;