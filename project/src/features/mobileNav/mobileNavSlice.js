import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const mobileNavSlice = createSlice({
    name: 'mobileNav',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { open, close } = mobileNavSlice.actions

export default mobileNavSlice.reducer