import { createSlice } from "@reduxjs/toolkit"
import { logout } from "../core/action"

export const featureName = "user"

const userSlice = createSlice({
    name: featureName,
    initialState: {
        loading: true
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(logout, (state, action) => {
            console.log("user call", state)
            state.loading = false
        }).addDefaultCase((state, action) => {})
    }
})

export const {
    reducer
} = userSlice