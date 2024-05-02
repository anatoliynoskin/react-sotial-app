import Card from "./Card/Card";

import classes from "./Services.module.css";

const Services = ({cards}) => {
    return <section>
        <h2 className="title">Основные услуги</h2>
        <div className={classes.cards}>
            {cards.map((card, key) => <Card key={key} data={card}/>)}
        </div>
    </section>
}

export default Services;