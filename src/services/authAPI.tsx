import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Details, LoginDetails } from "../models/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/user",
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
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
