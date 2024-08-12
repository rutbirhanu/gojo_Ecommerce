import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    products: [],
    searchTerm: "",
    filteredProducts:[]
}

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers:
    {
        setProduct: (state, action) => {
            state.products= action.payload
        },
        
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer