import React, { useEffect } from "react";
import Productlist from "../../component/BookStore/Productlist";
import FilterCard from "../../component/BookStore/FilterCard";
import { useDispatch } from "react-redux";
import { changeProducts } from "../../State/Slice/ProductSlice";
import axios from "axios";

export default function BookStore() {
      const dispatch = useDispatch();
      useEffect(()=>{
        getProducts();
      },[])

    async function getProducts(){
        const response = await axios.get(`http://localhost:4000/book_publisher/product`,{
            params:{
                priceFilter:{
                    min:0,
                    max:100
                }
            }
        });
        console.log(response.data)
        dispatch(changeProducts(response.data))
    }

    return (

        <div>
            <h1 className="text-center font-bold text-5xl text-blue-950"><span className="text-2xl">Our</span><br />BOOKSTORE</h1>
            <div className="grid sm:grid-cols-[1fr] lg:grid-cols-[1fr_3fr] gap-4">
                <div className="m-5">
                <h3 className="text-blue-950 text-3xl">Filter by</h3>
                   <hr />
                    <FilterCard/>
                </div>
                <div className="m-5">
                <h3 className="text-blue-950 text-3xl">All Products</h3>
                <br />
                    <Productlist />
                </div>
            </div>

        </div>
    )
}