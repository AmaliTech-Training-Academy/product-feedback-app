import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headerDropdown: false,
    optionsDropdown: false,
    categoryDropdown: false
}

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        openHeader: (state) => {
            state.headerDropdown = true
        },
        closeHeader: (state) => {
            state.headerDropdown = false
        },
        openOptions: (state) => {
            state.optionsDropdown = true
        },
        closeOptions: (state) => {
            state.optionsDropdown = false
        },
        openCategory: (state) => {
            state.categoryDropdown = true
        },
        closeCategory: (state) => {
            state.categoryDropdown = false
        }
    }
})

export const { openHeader, closeHeader, openOptions, closeOptions, openCategory, closeCategory } = dropdownSlice.actions

export default dropdownSlice.reducer