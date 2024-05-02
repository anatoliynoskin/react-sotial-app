import {useEffect} from "react";
import Objects from "./Objects";
import {useDispatch, useSelector} from "react-redux";
import {fetchObjects, selectAllObjects} from "../../../features/objects/objectsSlice";
import classNames from "classnames";
import classes from "./Skeletons.module.css"
import { Skeleton } from "@mui/material";

const ObjectsContainer = (props) => {
    const objectsList = useSelector(selectAllObjects);
    const dispatch = useDispatch();

    const objectsStatus = useSelector(state => state.objects.status)
    const error = useSelector(status => status.objects.error)

    useEffect(() => {
        if (objectsStatus === 'idle') {
            dispatch(fetchObjects())
        }
    }, [dispatch, objectsStatus]);

    let content;
    if (objectsStatus === 'loading'){
        const skeletonsKeys = [1, 2, 3, 4];
        content = <main className={classNames(classes.flex, 'wrapper', 'main')}>
            {skeletonsKeys.map((val) => <div className={classes.marginBottom} key={val}>
                <Skeleton className={classes.marginBottom} animation="wave" ariant="rectangular" width={290} height={260}/>
                <Skeleton className={classes.marginBottom} animation="wave" variant="text" width={250} height={60} />
                <Skeleton className={classes.marginBottom} animation="wave" variant="text" width={250} height={100} />
                <Skeleton className={classes.marginBottom} animation="wave" variant="text" width={100} height={60} />
            </div>
            )}
        </main>;
    } else if (objectsStatus === 'succeeded') {
        content = <Objects objectsList={objectsList}/>
    } else {
        content = error
    }

    return content;
}

export default ObjectsContainer;