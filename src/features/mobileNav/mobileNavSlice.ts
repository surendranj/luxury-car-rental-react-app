import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const mobileNav = createSlice({
    name: "mobileNav",
    initialState,
    reducers: {
        toggleNav: (state) => !state,
    },
});

export default mobileNav.reducer;
export const mobileNavActions = mobileNav.actions;
