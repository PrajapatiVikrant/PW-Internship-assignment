import { createSlice } from "@reduxjs/toolkit";

const SelectProductSlice = createSlice({
    name:"SelectProduct",
    initialState:{
        url:"",
        description:"",
        price:"",
        title:"",
        category:""
    },
    reducers:{
        changeSelectProduct:(state,action)=>{
            console.log(action.payload)
            state =  action.payload
            return state;
        }
    }
})

export const {changeSelectProduct} = SelectProductSlice.actions;
export default SelectProductSlice.reducer;