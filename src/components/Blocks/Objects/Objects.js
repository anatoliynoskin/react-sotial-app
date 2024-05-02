import Slider from "react-slick";
import {useSelector} from "react-redux";
import {selectAllObjects} from "../../../features/objects/objectsSlice";
import Slide from "./Slide";
import {useRef} from "react";

const Objects = () => {
    const sliderSettings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    let sliderRef = useRef(null);

    const nextSlide = () => {
        sliderRef.slickNext();
    };
    const prevSlide = () => {
        sliderRef.slickPrev();
    };

    const countObjects = 3;
    const objectsList = useSelector(selectAllObjects).slice(0, countObjects);

    return <section className={`js-objects`}>
        <h2 className="title">Последние объекты</h2>
        <div className="slider-container">
            <Slider
                {...sliderSettings}
                ref={slider => {
                    sliderRef = slider;
                }}
            >
                {objectsList.map((object, key) =>
                    <Slide
                        prevSlide={prevSlide}
                        nextSlide={nextSlide}
                        objectData={object}
                        key={key}
                    />)
                }
            </Slider>
        </div>
     </section>
}

export default Objects;