import React from "react";
import Object from "./Object";
import classes from "./Objects.module.scss";
import classNames from "classnames";

function Objects({objectsList}) {
    return <main className={classNames(classes.objects, 'wrapper', 'main')}>
        {objectsList.map((object, key) => <Object data={object} key={key}/>)}
    </main>
}

export default Objects;