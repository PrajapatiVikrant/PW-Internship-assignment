import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./Slice/FilterSlice";
import ProductSlice from "./Slice/ProductSlice"
import SelectProductSlice from "./Slice/SelectProductSlice"
import CartCountSlice from "./Slice/CartCountSlice";
import CartSlice from "./Slice/CartSlice"

export const store = configureStore({
    reducer:{
        filter:FilterSlice,
        products:ProductSlice,
        selectProduct:SelectProductSlice,
        totalCart:CartCountSlice,
        cartList:CartSlice
    }
})