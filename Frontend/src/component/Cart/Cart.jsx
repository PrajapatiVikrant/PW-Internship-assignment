import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import CartCard from "./CartCard";
import Orderbtn from "./Orderbtn";

export default function Cart(){
   
    return (
       <div id="cart" className={`w-full lg:w-1/3 left-[100%] overflow-auto transition-[2s] h-full z-20 top-0 fixed bg-white`}>
       <span className="text-2xl cursor-pointer" onClick={()=>document.getElementById('cart').style.left = "100%"}><IoClose /></span>
      
       <h1 className="text-3xl p-2 font-bold">Cart Items</h1>
       <hr className="h-1 bg-black" />
       <section className=" overflow-auto h-[70vh] flex flex-col items-center border-2 border-red-700 ">

       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       <CartCard/>
       </section>
       <hr className="h-1 bg-black" />
       <Orderbtn/>
       </div>
    )
}