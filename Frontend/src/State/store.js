import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./Slice/FilterSlice";
import ProductSlice from "./Slice/ProductSlice"
import SelectProductSlice from "./Slice/SelectProductSlice"

export const store = configureStore({
    reducer:{
        filter:FilterSlice,
        products:ProductSlice,
        selectProduct:SelectProductSlice
    }
})