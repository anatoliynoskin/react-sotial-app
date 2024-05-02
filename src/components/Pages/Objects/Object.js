import classes from "./Object.module.scss";
import classNames from "classnames";

const Object = ({data}) => {
    return <div className={classes.object}>
        <img src={data.img} alt="card" className={classes.object__img} />
        <div className={classes.object__text}>
            <h4 className={classes.object__title}>{data.title}</h4>
            <p className={classes.object__description}>{data.description}</p>
            <a href="#" className={classNames(classes.object__link, 'card-link', 'arrow-link', 'arrow-link_black')}>Подробнее</a>
        </div>
    </div>
}

export default Object;