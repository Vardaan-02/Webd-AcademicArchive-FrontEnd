import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme/index";
import { authApi } from "../services/authAPI";
import loginDetailsSlice from "./slices/loginDetails";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    loginDetails: loginDetailsSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
