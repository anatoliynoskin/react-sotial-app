import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

const initialState = newsAdapter.getInitialState({
    status: 'idle',
    error: null
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNewsPost(state, action) {
            const { postId, postData } = action.payload
            const existingPost = state.entities[postId]
            if (!existingPost) {
                state.news.push(postData)
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNews.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded'
                newsAdapter.upsertMany(state, action.payload);
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const fetchNews = createAsyncThunk("/news/fetchNews", async () => {
    const response = await fetch("/api/news")
    return response.json()
})
export const {
    selectAll: selectAllNews,
} = newsAdapter.getSelectors(state => state.news)
export const selectNewsPostById = (state, postId) => state.news.find(newsPost => newsPost.id === postId);
export default newsSlice.reducer;