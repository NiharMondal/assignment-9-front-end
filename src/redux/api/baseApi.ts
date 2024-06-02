import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const BASE_URL = "https://assignment-9-back-end.vercel.app/api/v1";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		credentials: "include",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `${token}`);
			}
			return headers;
		},
	}),
	endpoints: () => ({}),
	tagTypes: ["trip", "user", "buddy", "profile"],
});