import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const login = createAsyncThunk(
    "auth/login",
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3500/user/login", { user: loginData })
            console.log(response)
            return response.data.user
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.error)
        }
    }
)

export const register = createAsyncThunk(
    "auth/register",
    async (registerData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3500/user/sign-up", {
                user:registerData
            })
            console.log(response)
            return response.data.user
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.error)
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

            .addCase(register.pending, state => {
                state.isLoading=true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading=false
            })
            .addCase(register.rejected, state => {
                state.isLoading=false
            })
    }
    
}) 

export default authSlice.reducer