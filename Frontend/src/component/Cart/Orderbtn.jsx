import React from "react";

const Orderbtn = ()=>{
    
    return (
        <section className="p-3 flex flex-col text-2xl">
            
            <p className="flex justify-around "><strong>Subtotal</strong><span>$25.00</span></p>
            <button className=" border-2 border-black p-2 hover:bg-black hover:text-white transition-all duration-1000 ease-linear">Order Now</button>

        </section>
    )
}

export default Orderbtn;