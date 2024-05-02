import classes from './Card.module.css';
import CardArrowLink from "../../../UI/CardArrowLink";

const Card = ({data}) => {
    return <div className={classes.card}>
        <img src={data.img} alt="card" className={classes.img}/>
        <h3 className={classes.title}>{data.title}</h3>
        <p className={classes.description}>{data.description}</p>
        <CardArrowLink to={'/'} text={'Подробнее'}/>
    </div>
}

export default Card;