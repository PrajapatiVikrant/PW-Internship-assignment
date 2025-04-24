import React from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectProduct } from "../../State/Slice/SelectProductSlice";

export default function Productlist() {
    const productList = useSelector((state) => {
        return state.products
    })
    const dispatch = useDispatch()
    console.log(productList)
    function selectedProduct(product) {
        dispatch(changeSelectProduct(product))
    }
    return (


        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center   items-center">

            {productList.product.map((product) => {
                return (
                    <center>

                    <div className="w-fit border" onClick={()=>selectedProduct(product)}>

                        <ProductCard category={product.category} price={product.price} title={product.title} description={product.description} url={product.url} />
                    </div>
                    </center>
                )
            })}
        </div>

    )
}