import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

// This state is used in AdminInsideSidebar && DashBoardInsideSidebar, it maintain the current tab according to which question are changed this could have been a normal state

const initialState = {
    value: "DSA",
}

export const subjectSlice = createSlice({
  initialState,
  name: "subject",
  reducers: {
    setSubject(state, action: PayloadAction<string>) {
        state.value = action.payload;
      },
  },
});

export const { setSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
