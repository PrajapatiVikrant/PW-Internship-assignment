import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name:"FilterSlice",
    initialState:{
        categoryFilter:[],
        priceFilter:{
            min:0,
            max:100
        }
    },
    reducers:{
       changeCategoryFilter:(state,action)=>{
       
        state.categoryFilter = action.payload;
        return state;
       },
       changePriceFilter:(state,action)=>{
        
        state.priceFilter = action.payload;
        console.log(state.priceFilter);
        return state;
       }
    }
})
export const  {changeCategoryFilter,changePriceFilter} = FilterSlice.actions;
export default FilterSlice.reducer;