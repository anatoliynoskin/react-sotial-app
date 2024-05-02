import classes from "./Form.module.scss";
const Form = () => {
    return <form action="" className={classes.form}>
        <h2 className={classes.form__title}>Напишите нам</h2>
        <input type="text" name="name" className={classes.form__input} placeholder="Имя" />
        <input type="email" name="email" className={classes.form__input} placeholder="Email" />
        <textarea name="message" className={`${classes.form__input} ${classes.form__textarea}`} placeholder="Сообщение:"></textarea>
        <input type="submit" name="submit" className={classes.form__button} />
    </form>
}

export default Form;