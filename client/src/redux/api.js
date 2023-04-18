import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// We create an endpoint to call our backend
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: [],
  endpoints: (builder) => ({
    // Our call to grab our KPI from backend
    getKpis: builder.query({
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis'],
    }),
  }),
});

export const { useGetKpisQuery } = api;
