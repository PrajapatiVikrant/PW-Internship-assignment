import { createSlice } from "@reduxjs/toolkit";


const CartCountSlice = createSlice({
    name:"CartCount",
    initialState:0,
    reducers:{
       increment:(state,action)=>{
        state = state+1;
        return state;
       },
       decrement:(state,action)=>{
        state = state-1;
        return state;
       } 
    }
})

const {increment,decrement} = CartCountSlice.actions;
export default CartCountSlice.reducer;