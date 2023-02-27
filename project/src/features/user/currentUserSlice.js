import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: [],
    isLoading: false
}

const url = 'http://localhost:8000/currentUser/'

export const getCurrentUser = createAsyncThunk('user/getCurrentUser', 
    async () => {
    try {
        const response = axios(url)
        return await response
    } catch (error) {
        
    }
})

const currentUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getCurrentUser.pending]: (state) => {
            state.isLoading = true;
        },
        [getCurrentUser.fulfilled]: (state, { payload }) => {
            console.log(payload.data)
            state.user = payload.data
        },
        [getCurrentUser.rejected]: (state) => {
            state.isLoading = false
        }
    }
})


export default currentUserSlice.reducer