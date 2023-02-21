import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    feedbackItems: [],
    data:[],
    inProgress: [],
    planned: [],
    live: [],
    feed: {},
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
        sortFeedback: (state, { payload }) => {
            if(payload === 'Most Upvotes') {
                state.feedbackItems = state.feedbackItems.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1)
            }
            if(payload === 'Least Upvotes') {
                state.feedbackItems = state.feedbackItems.sort((a, b) => a.upvotes < b.upvotes ? -1 : 1)
            }
            if(payload === 'Most Comments') {
                const dataWithComments = state.feedbackItems.filter(item => item.comments)
                const dataWithoutComments = state.feedbackItems.filter(item => !item.comments)
                dataWithComments.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1)
                const sortedData = [...dataWithComments, ...dataWithoutComments]
                state.feedbackItems = sortedData
            }
            if(payload === 'Least Comments') {
                const dataWithComments = state.feedbackItems.filter(item => item.comments)
                const dataWithoutComments = state.feedbackItems.filter(item => !item.comments)
                dataWithComments.sort((a, b) => a.comments.length < b.comments.length ? -1 : 1)
                const sortedData = [...dataWithoutComments, ...dataWithComments]
                state.feedbackItems = sortedData
            }
        },
        sortCategory: (state, {payload}) => {
            if(payload === 'All') {
                state.feedbackItems = state.data
            }
            else {
                state.feedbackItems = state.data.filter(ele => ele.category === payload.toLowerCase())
            }
        },
        findSingleFeed: (state, { payload }) => {

        }
    },
    extraReducers: {
        [getFeedbacks.pending]: (state) => {
            state.isLoading = true
        },
        [getFeedbacks.fulfilled]: (state, {payload}) => {
            // console.log(action)
            state.feedbackItems = payload.data
            state.data = payload.data
            state.inProgress = payload.data.filter(ele => ele.status.toLowerCase() === 'in-progress')
            state.planned = payload.data.filter(ele => ele.status.toLowerCase() === 'planned')
            state.live = payload.data.filter(ele => ele.status.toLowerCase() === 'live')
            // localStorage.setItem('data', JSON.stringify(action.payload.data))
        },
        [getFeedbacks.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const { sortFeedback, sortCategory } = feedbackSlice.actions

export default feedbackSlice.reducer