import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const login = createAsyncThunk(
    "auth/login",
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post("http:/localhost:1000/user/login", { user: userData })
            return response.body.user
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.body.error)
        }
    }
)
const initialState = {
    user: null,
    isLoading:false
}

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.isLoading=true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading=false
            })
            .addCase(login.rejected, state => {
                state.isLoading=false
            })
    }
    
}) 

export default authSlice.reducer