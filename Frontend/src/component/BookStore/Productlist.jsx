import React from "react";
import ProductCard from "./ProductCard";

export default function Productlist(){
    return (
       

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
</div>

    )
}