import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {User, UserFormData} from "@/entities/user/model/types.ts";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3002'
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['Users']
        }),

        addUser: builder.mutation<User, UserFormData>({
            query: (newUser) => ({
                url: '/users',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['Users']
        }),

        deleteUser: builder.mutation<string, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Users'],
        })
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation
} = userApi