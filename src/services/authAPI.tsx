import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Details, LoginDetails } from "../models/user";

//Used RTK query to show that i know how to do them could have been axios call or normal fetch request 
export const authApi = createApi({

  //defining a reducer to include this in main store
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/user",
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),

  //endpoints for call in backend
  endpoints: (builder) => ({
    signUp: builder.mutation<void, User>({
      query: (user) => ({
        url: "/signUp",
        method: "POST",
        body: user,
      }),
    }),
    logIn: builder.mutation<Details, LoginDetails>({
      query: (loginDetails) => ({
        url: "/logIn",
        method: "POST",
        body: loginDetails,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = authApi;
