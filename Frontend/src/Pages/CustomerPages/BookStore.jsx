import React from "react";
import Productlist from "../../component/BookStore/Productlist";
import FilterCard from "../../component/BookStore/FilterCard";

export default function BookStore() {


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