import classes from "./License.module.css";
import license1 from "../../../images/license.jpg"
const License = () => {
    return <section>
        <h2 className="title">Лицензии</h2>
        <div className={classes.license}>
            <img src={license1} alt="license" />
            <img src={license1} alt="license" />
        </div>
    </section>
}

export default License;