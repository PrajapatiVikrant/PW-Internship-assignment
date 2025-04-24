import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:"ProductSlice",
    initialState:{
        product:[]
    },
    reducers:{
       changeProducts(state,action){
        console.log(action.payload)
        state = action.payload;
        return state
       }
    }
})
export const  {changeProducts} = ProductSlice.actions;
export default ProductSlice.reducer;