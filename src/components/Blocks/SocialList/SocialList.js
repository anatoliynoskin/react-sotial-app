import classes from "./SocialList.module.scss";
import tgIcon from "../../../images/icons/contacts_tg.svg"
import instIcon from "../../../images/icons/contacts_inst.svg"

const SocialList = (props) => {
    if (props.place === 'footer') {
        return <ul className={`${classes.socialList} footer__social`}>
            <li>
                <a href="#">
                    <img className={classes.socialList__img} src={tgIcon} alt="telegram" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img className={classes.socialList__img} src={instIcon} alt="instagram" />
                </a>
            </li>
        </ul>
    } else {
        return <ul className={classes.socialList}>
            <li>
                <a href="#">
                    <img className={classes.socialList__img} src={tgIcon} alt="telegram" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img className={classes.socialList__img} src={instIcon} alt="instagram" />
                </a>
            </li>
        </ul>
    }
}

export default SocialList;