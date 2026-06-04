import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (build) => ({
        getUserAccount: build.query({
            query: () => 'accounts/'
        })
    })
})

export const { useGetUserAccountQuery } = adminApi;