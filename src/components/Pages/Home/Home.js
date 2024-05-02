import Hero from "./Hero/Hero";
import Services from "../../Blocks/Services/Services";
import Objects from "../../Blocks/Objects/Objects";
import License from "../../Blocks/License/License";
import './Home.css';
import cardImg1 from  '../../Blocks/Services/Card/images/card1.jpg';
import cardImg2 from  '../../Blocks/Services/Card/images/card2.jpg';
import cardImg3 from  '../../Blocks/Services/Card/images/card3.jpg';

const cards = [
    {
        img: cardImg1,
        title: 'Проектирование и обследование',
        description: 'Реставрация архитектуры должна проводиться только после тщательного обследования и подготовки проекта.',
    },
    {
        img: cardImg2,
        title: 'Проектирование и обследование',
        description: 'Реставрация архитектуры должна проводиться только после тщательного обследования и подготовки проекта.',
    },
    {
        img: cardImg3,
        title: 'Проектирование и обследование',
        description: 'Реставрация архитектуры должна проводиться только после тщательного обследования и подготовки проекта.',
    },
]

const Home = (props) => {
    return (
        <main className="main wrapper">
            <Hero />
            <Services cards={cards}/>
            <Objects />
            <License />
        </main>
    )
}

export default Home;