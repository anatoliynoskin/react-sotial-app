import classes from "./ContactsList.module.scss";

const ContactsList = (props) => {

    if (props.place === 'footer') {
        return <div className={`${classes.contactsList} ${classes.footer__list}`}>
            <ul className={classes.contactsList__elements}>
                <li className={classes.contactsList__item}>Телефон:</li>
                <li className={classes.contactsList__item}>Email:</li>
                <li className={classes.contactsList__item}>Адрес:</li>
            </ul>
            <ul className={classes.contactsList__elements}>
                <li className={`${classes.contactsList__item} contactsList__item_phone`}>8 (999) 123 45 67</li>
                <li className={classes.contactsList__item}>test@test.ru</li>
                <li className={classes.contactsList__item}>Санкт-Петербург, проспект Луначарского, дом 13, корп. 1, лит. А, пом. 60Н, офис 2</li>
            </ul>
        </div>
    } else {
        return <div className={`${classes.contactsList}`}>
            <ul className={classes.contactsList__elements}>
                <li className={classes.contactsList__item}>Телефон:</li>
                <li className={classes.contactsList__item}>Email:</li>
                <li className={classes.contactsList__item}>Адрес:</li>
            </ul>
            <ul className={classes.contactsList__elements}>
                <li className={`${classes.contactsList__item} contactsList__item_phone`}>8 (999) 123 45 67</li>
                <li className={classes.contactsList__item}>test@test.ru</li>
                <li className={classes.contactsList__item}>Санкт-Петербург, проспект Луначарского, дом 13, корп. 1, лит. А, пом. 60Н, офис 2</li>
            </ul>
        </div>
    }
}

export default ContactsList;