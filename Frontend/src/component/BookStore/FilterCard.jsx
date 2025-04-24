import React, { useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoryFilter } from "../../State/Slice/FilterSlice";
import axios from "axios";
import { changeProducts } from "../../State/Slice/ProductSlice";


export default function FilterCard() {
    const [productFilter,setProductFilter] = useState(false)
    const [priceFilter,setPriceFilter] = useState(false)
    const filterData =   useSelector((state)=>{
        return state.filter;
    })
    
    const dispatch = useDispatch();
    function filterHandle(category){
        console.log(category)
        const catgoryItem = document.querySelector(`#${category}`);
        
        
        if(catgoryItem.checked){
            const newArr = [category,...filterData.categoryFilter];
            console.log(newArr)
           
            dispatch(changeCategoryFilter(newArr));
        }else{
            const removeFilteredArr = filterData.categoryFilter.filter((item)=>{
                return item != category;
            })
            dispatch(changeCategoryFilter(removeFilteredArr));
        }
    }




    async function applyFilter(){
        console.log(filterData.categoryFilter)
        const response = await axios.get(`http://localhost:4000/book_publisher/product`,{
            params:{
                categoryFilter:filterData.categoryFilter,
                priceFilter:filterData.priceFilter
            }
        });
        console.log(response.data)
        dispatch(changeProducts(response.data))
    }
    
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center text-xl">
                <h3>Collection</h3>
                <button className="text-3xl" onClick={()=> setProductFilter(productFilter?false:true)}>{productFilter?"-":"+"}</button>
            </div>
            <div  className={productFilter?"h-auto":"h-0 overflow-hidden"}>
                <div >
                    <input id="Novels"  className="mx-3" type="checkbox" onClick={()=>filterHandle("Novels")} />
                    <span>Novels</span>
                </div>
                <div>
                     <input id="Design_et_Art" className="mx-3" type="checkbox" onClick={()=>filterHandle("Design_et_Art")}/>
                    <span>Design et Art</span>
                </div>
                <div>
                     <input id="Life_Style" className="mx-3" type="checkbox" onClick={()=>filterHandle('Life_Style')} />
                    <span>Life Style</span>
                </div>
                <div>
                     <input id="Travel" className="mx-3" type="checkbox" onClick={()=>filterHandle('Travel')} />
                    <span>Travel</span>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center text-xl">
                <h3>Price</h3>
                <button className="text-3xl" onClick={()=> setPriceFilter(priceFilter?false:true)}>{priceFilter?"-":"+"}</button>
            </div>
            <PriceRangeFilter priceFilter = {priceFilter}/>
            <hr />
            <button className="text-2xl bg-blue-800 hover:bg-blue-500 text-white p-2 m-2" onClick={applyFilter}>Apply Filter</button>

        </div>
    )
}