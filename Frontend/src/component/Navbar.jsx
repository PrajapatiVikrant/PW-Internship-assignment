import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [topNav,setTopNav] = useState('0');

    return (
        <div>
            {/* desktop screen */}
            <nav className="hidden lg:flex my-2 ml-3 justify-between">
                <section className="text-2xl font-semibold flex items-center tracking-widest">
                    <div className="border-4 border-black text-white bg-black  bold p-2">BOOK <span className="bg-white text-blue-950 p-2">PUBLISHER</span></div>
                </section>
                <section className="flex w-1/2 justify-around  items-center text-2xl">
                    <span className="cursor-pointer">Bookstore</span>
                    <span className="cursor-pointer">Events</span>
                    <span className="cursor-pointer">Order</span>
                    <span className="cursor-pointer">Contact</span>
                    <section className="flex items-center">
                        <span className="flex items-center cursor-pointer "><FaCircleUser />  <span className="ml-4">Sign In</span></span>
                        <div className="flex">
                            <span className="text-5xl relative right-2"><BiCartAdd /></span>
                            <span className="absolute text-white rounded-xl  text-base top-4 bg-blue-950  p-1 pt-0 pb-0" >0</span>
                        </div>
                    </section>
                </section>
            </nav>







            {/* Small screen */}
            
            <div style={{height:topNav,zIndex:1}} className="overflow-hidden bg-white  text-2xl  flex flex-col items-center ">
                <div className="  w-full flex justify-end pr-3 text-4xl cursor-pointer" onClick={()=>setTopNav('0')}><IoClose /></div>
                <span className="flex items-center cursor-pointer "><FaCircleUser />  <span className="ml-4">Sign In</span></span>
                <span className="cursor-pointer hover:text-blue-600">Bookstore</span>
                <span className="cursor-pointer hover:text-blue-600">Events</span>
                <span className="cursor-pointer hover:text-blue-600">Order</span>
                <span className="cursor-pointer hover:text-blue-600">Contact</span>
            </div>



            <nav className="flex lg:hidden my-2 ml-3 justify-between">

                <section className="text-2xl font-semibold flex items-center">
                    <div className="border-4 border-black text-white bg-black  bold p-2">BOOK <span className="bg-white text-blue-950 p-2">PUBLISHER</span></div>
                </section>
                <section className="flex items-center">

                    <div className="flex">
                        <span className="text-5xl relative right-2"><BiCartAdd /></span>
                    </div>
                    <span className="flex items-center cursor-pointer text-3xl " onClick={()=>setTopNav('100vh')}><BsThreeDotsVertical /></span>
                </section>
            </nav>
           <div className="flex lg:hidden justify-end "><span className="bg-blue-950 h-2/3 rounded-3xl text-white p-1 relative px-2 bottom-16 right-16" >0</span></div> 
           

        </div>
    )
}