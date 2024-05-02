import Navigation from "./Navigation";
import Content from "./Content";
import {useParams} from "react-router-dom";
import servicesClasses from "./services.module.scss"
import classNames from "classnames";

const Services = () => {
    const {servicesSlug} = useParams();
    console.log(servicesSlug);

    return <main className={classNames(servicesClasses.services, 'wrapper', 'main')}>
        <Content servicesSlug={servicesSlug}/>
        <Navigation servicesSlug={servicesSlug}/>
    </main>
}

export default Services;