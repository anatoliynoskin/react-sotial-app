import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./features/news/newsSlice";
import objectsReducer from "./features/objects/objectsSlice";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        objects: objectsReducer
    }
});

