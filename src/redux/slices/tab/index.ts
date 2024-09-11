import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

// This state is used to maintain current tab this also could have been a normal state

const initialState = {
    value: "",
}

export const tabSlice = createSlice({
  initialState,
  name: "tab",
  reducers: {
    setTab(state, action: PayloadAction<string>) {
        state.value = action.payload;
      },
  },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
