import {NavLink} from "react-router-dom";
import navigationClasses from "./Navigation.module.scss";
import classNames from "classnames";

const servicesList = [
    {url: undefined, text: "Проектирование и обследование"},
    {url: "civil-works", text: "Общестроительные работы"},
    {url: "engineering-systems", text: "Инженерные системы"},
    {url: "geotechnical-calculations", text: "Геотехнические расчеты"},
    {url: "calculation-of-foundations-on-frozen-soils", text: "Расчет фундаментов на мерзлых грунтах"},
];

const Navigation = ({servicesSlug}) => {
    let content = servicesList.map((link, key) => (
        <li
            key={key}
            className={classNames(
                navigationClasses.item,
                servicesSlug === link.url ? navigationClasses.item_active : null
            )}>
            <NavLink className={navigationClasses.link} to={!!link.url ? `/services/${link.url}` : '/services'}>{link.text}</NavLink>
        </li>
    ));
    return <ul className={navigationClasses.navigation}>{content}</ul>
}

export default Navigation;