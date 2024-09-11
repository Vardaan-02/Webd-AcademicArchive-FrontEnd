import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme/index";
import tabSlice from "./slices/tab";
import loginDetailsSlice from "./slices/loginDetails";
import subjectSlice from "./slices/subject";
import { authApi } from "../services/authAPI";
import { questionApi } from "@/services/quesAPI";


// ye hai main store yha sab iktha karo aur provider ko dedo
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    loginDetails: loginDetailsSlice,
    tab: tabSlice,
    subject: subjectSlice,
    [authApi.reducerPath]: authApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,

  },
  //Middleware for backend calls
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(questionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
