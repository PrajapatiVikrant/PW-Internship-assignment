import React, { useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";

export default function FilterCard() {
    const [productFilter,setProductFilter] = useState(false)
    const [priceFilter,setPriceFilter] = useState(false)
    
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center text-xl">
                <h3>Collection</h3>
                <button className="text-3xl" onClick={()=> setProductFilter(productFilter?false:true)}>{productFilter?"-":"+"}</button>
            </div>
            <div  className={productFilter?"h-auto":"h-0 overflow-hidden"}>
                <div>
                    <input className="mx-3" type="checkbox" />
                    <span>Novels</span>
                </div>
                <div>
                     <input className="mx-3" type="checkbox" />
                    <span>Design et Art</span>
                </div>
                <div>
                     <input className="mx-3" type="checkbox" />
                    <span>Life Style</span>
                </div>
                <div>
                     <input className="mx-3" type="checkbox" />
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

        </div>
    )
}