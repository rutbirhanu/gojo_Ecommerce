import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    product: [],
    totalPrice: 0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:
    {
        addToCart: (state, action) => {
            const newItem = action.payload
            const itemIndex = state.product.find(item => item.id === newItem.id)
            if (itemIndex) {
                itemIndex.quantity++
                // state.totalPrice+=newItem.price
            }
            else {
                state.product.push({
                    id: newItem.id,
                    quantity: 1,
                    name: newItem.name,
                    image: newItem.image,
                    price:newItem.price
                })
            }
            state.totalPrice += newItem.price
            state.totalQuantity++

        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer