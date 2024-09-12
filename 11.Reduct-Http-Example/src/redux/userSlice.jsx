import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false
}

export const fetchUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(response.data)
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        // http isteği olmaz ise kullanılır !

    },
    extraReducers: (builder) => {
        // http isteklerinde kullanılır

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Add user to the state array
            state.users = action.payload
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer