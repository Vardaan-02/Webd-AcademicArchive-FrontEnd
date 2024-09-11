import { createSlice } from "@reduxjs/toolkit";

// This maintain current theme of website , If we have more than just light or dark then website looks way cooler but this time we only went with 2 

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