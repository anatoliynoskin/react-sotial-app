import classes from "./Footer.module.scss";
import Logo from "../Blocks/Logo/Logo";
import Menu from "../Blocks/Menu/Menu";
import ContactsList from "../Blocks/ContactsList/ContactsList";
import SocialList from "../Blocks/SocialList/SocialList";
import classNames from "classnames";
const Footer = (props) => {
    return <footer className={classes.footer}>
        <div className={classes.footer__container}>
            <div className={classes.footer__header}>
                <Logo place={'footer'}/>
                <Menu place={'footer'}/>
            </div>
            <div className={classes.footer__main}>
                <div className={classes.footer__left}>
                    <ContactsList place={'footer'}/>
                    <SocialList place={'footer'}/>
                </div>

                <form action="" className={classes.footer__form}>
                    <input type="text" name="name" className={classes.footer__input} placeholder="Имя" />
                    <input type="email" name="email" className={classes.footer__input} placeholder="Email" />
                    <textarea name="message" className={classNames(classes.footer__input, "footer__textarea")} placeholder="Сообщение:"></textarea>
                    <input type="submit" name="submit" className={classes.footer__button} />
                </form>
            </div>
        </div>
    </footer>
}

export default Footer;