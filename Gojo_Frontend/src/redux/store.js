import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cardSlice"
import productSlice from "./productSlice";

export default configureStore(
    {
        reducer: {
            "cart": cartSlice,
            "product": productSlice
    }
})