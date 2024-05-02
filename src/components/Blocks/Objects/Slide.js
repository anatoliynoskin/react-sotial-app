import Navigation from "./Navigation";
import classes from "./Slide.module.css";

const Slide = ({objectData, prevSlide, nextSlide}) => {
    return <div className={classes.slide}>
        <img src={objectData.img} alt={classes.title} className={classes.img}/>
        <div className={classes.text}>
            <h3 className={classes.title}>{objectData.title}</h3>
            <p className={classes.description}>{objectData.description}</p>
            <Navigation prevSlide={prevSlide} nextSlide={nextSlide}/>
        </div>
    </div>
}

export default Slide;