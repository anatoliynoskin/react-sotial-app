import {createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import img1 from "../../images/news_card1.jpg";
import img2 from "../../images/news_card2.jpg";

const objectsAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

const emptyInitialState = objectsAdapter.getInitialState({
    status: 'idle',
    error: null,
})

const initialState = objectsAdapter.upsertMany(emptyInitialState,
[
        {
            id: 1,
            title: 'Инженерные системы objects 3',
            description: 'Разработка проектной документации и работы по реставрации оконных заполнений здания СПбНЦ РАН. Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
            img: img1
        },
        {
            id: 2,
            title: 'Инженерные системы objects 1',
            description: 'Разработка проектной документации и работы по реставрации оконных заполнений здания СПбНЦ РАН. Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
            img: img2
        },
        {
            id: 3,
            title: 'Инженерные системы objects 2',
            description: 'Разработка проектной документации и работы по реставрации оконных заполнений здания СПбНЦ РАН. Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
            img: img1
        }
    ]);

const objectsSlice = createSlice({
    name: "objects",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchObjects.pending, (state,action) => {
                state.status = "loading"
            })
            .addCase(fetchObjects.fulfilled, (state,action) => {
                state.status = 'succeeded'
                objectsAdapter.upsertMany(state, action.payload)
            })
            .addCase(fetchObjects.rejected, (state,action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
    }
});

export const fetchObjects = createAsyncThunk("objects/fetchObjects", async () => {
    const response = await fetch("/api/objects")
    return response.json()
})
export const {
    selectAll: selectAllObjects,
} = objectsAdapter.getSelectors(state => state.objects)
export const selectObjectsPostById = (state, postId) => state.objects.find(objectsPost => objectsPost.id === postId);
export default objectsSlice.reducer;