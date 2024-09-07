import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    initialState:"light",
    name:"theme",
    reducers:{
        light: (state) => state = "light",
        dark: (state) => state = "dark",
    }
});

export const {dark,light} = themeSlice.actions;
export default themeSlice.reducer;