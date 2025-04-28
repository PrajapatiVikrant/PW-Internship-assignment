import { createSlice } from "@reduxjs/toolkit";
import React from "react";


const CartSlice = createSlice({
    name:"CartSlice",
    initialState:[],
    reducers:{
        changeCartList:(state,action)=>{
            state = action.payload;
            return state
        }
    }
})

export const {changeCartList} = CartSlice.actions
export default CartSlice.reducer;