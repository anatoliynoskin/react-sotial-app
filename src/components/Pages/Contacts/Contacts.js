import ContactsList from "../../Blocks/ContactsList/ContactsList";
import SocialList from "../../Blocks/SocialList/SocialList";
import Form from "./Form";
import {Map} from "@pbe/react-yandex-maps";
import classes from "./Contacts.module.scss";

const Contacts = () => {
    return <main className="wrapper">
        <div className={classes.header}>
            <div className={classes.info}>
                <ContactsList />
                <SocialList />
            </div>
            <Map className={classes.map} defaultState={{ center: [59.937234, 30.314310], zoom: 13 }} />
        </div>
        <Form />
    </main>
}

export default Contacts;