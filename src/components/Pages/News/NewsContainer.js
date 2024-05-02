import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import News from "./News";
import {fetchNews, selectAllNews} from "../../../features/news/newsSlice";
import { Skeleton } from "@mui/material";
import classes from "./NewsSkeletons.module.css"

const NewsContainer = () => {
    const dispatch = useDispatch()
    const news = useSelector(selectAllNews)

    const newsPostStatus = useSelector(state => state.news.status)

    useEffect(() => {
        if (newsPostStatus === 'idle') {
            dispatch(fetchNews())
        }
    }, [newsPostStatus, dispatch]);

    if (newsPostStatus === 'succeeded') {
        return <News newsList={news}/>;
    } else {
        return <main className={`wrapper`}>
            <div className={classes.skeletonNewsRow}>
                <Skeleton className={classes.skeletonNewsImg} animation="wave" variant="rectangular" width={620} height={550} />
                <div className={classes.skeletonNewsTitleRow}>
                    <Skeleton animation="wave" variant="text" width={20} height={60} />
                    <Skeleton animation="wave" variant="text" width={250} height={60} />
                    <Skeleton animation="wave" variant="rectangular" width={500} height={200} />
                </div>
            </div>
        </main>
    }


}

export default NewsContainer;