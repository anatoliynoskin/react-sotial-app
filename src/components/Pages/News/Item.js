import classes from "./Item.module.scss";

const Item = (props) => {
    return <div className={classes.item}>
        <img src={props.data.img} className={classes.item__img} alt="item1" />
        <div className="content">
            <div className={classes.item__titleRow}>
                <h5 className={classes.item__number}>{props.data.id + 1}</h5>
                <h6 className={classes.item__title}>{props.data.title}</h6>
            </div>
            <p className={classes.item__description}>{props.data.description}</p>
        </div>
    </div>
}

export default Item;