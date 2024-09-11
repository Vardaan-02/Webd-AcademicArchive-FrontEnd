import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Question } from "../models/question";

//Used RTK query to show that i know how to do them could have been axios call or normal fetch request 
export const questionApi = createApi({

  //defining a reducer to include this in main store
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/question",
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  //endpoints for call in backend
  endpoints: (builder) => ({
    subject: builder.query<Array<Question>, string>({
      query: (s) => `/${s}`,
    }),
    submitQuestion: builder.mutation<void, Question>({
      query: (ques) => ({
        url: "/submit",
        method: "POST",
        body: ques,
      }),
    }),
  }),
});

export const { useSubjectQuery, useSubmitQuestionMutation } = questionApi;
