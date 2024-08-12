import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:
    {
        setCart: (state, action) => {
            state.cart= action.payload
        }
    }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer