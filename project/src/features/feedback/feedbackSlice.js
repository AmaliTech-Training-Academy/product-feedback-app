import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    feedbackItems: [],
    isLoading: false
}

const url = 'http://localhost:8000/productRequests'

export const getFeedbacks = createAsyncThunk('feedback/getFeedbacks', 
    async () => {
    try {
        const response = axios(url)
        return await response
    } catch (error) {
        
    }
}) 

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getFeedbacks.pending]: (state) => {
            state.isLoading = true
        },
        [getFeedbacks.fulfilled]: (state, action) => {
            // console.log(action)
            state.feedbackItems = action.payload.data
            localStorage.setItem('data', JSON.stringify(action.payload.data))
        },
        [getFeedbacks.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export default feedbackSlice.reducer