import classNames from "classnames";
import linkClasses from "../Blocks/Services/Card/Card.module.css";
import styleCardButton from './CardArrowLink.module.css';

import {NavLink} from "react-router-dom";

const arrowLinkMouseOver = (e) => {
    e.target.classList.add('arrow-link_white');
    e.target.classList.remove('arrow-link_black');
}

const arrowLinkMouseLeave = (e) => {
    e.target.classList.add('arrow-link_black');
    e.target.classList.remove('arrow-link_white');
}

const CardArrowLink = ({to, text}) => {
    return <NavLink to={to} className={classNames(linkClasses.link, styleCardButton.cardLink, 'arrow-link', 'arrow-link_black')} onMouseLeave={arrowLinkMouseLeave} onMouseOver={arrowLinkMouseOver}>{text}</NavLink>
}

export default CardArrowLink;