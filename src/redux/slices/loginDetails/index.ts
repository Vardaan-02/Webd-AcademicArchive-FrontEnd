import { Details } from "@/models/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Details = {
  first_name: "",
  last_name: "",
  email: "",
  roll_number: "",
  admin : false,
};

export const loginDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Details | undefined>) => {
      if (action.payload === undefined) return;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.roll_number = action.payload.roll_number;
      state.admin = action.payload.admin;
    },
    logout: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.roll_number = "";
      state.admin = false;
    }
  },
});

export const { set,logout } = loginDetailsSlice.actions;
export default loginDetailsSlice.reducer;
