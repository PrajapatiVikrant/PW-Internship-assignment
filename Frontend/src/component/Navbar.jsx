import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeCartList } from "../State/Slice/CartSlice";

export default function Navbar() {
    const disptach = useDispatch();
    const [topNav, setTopNav] = useState('0');
    const totalCartItem = useSelector((state) => {
        return state.totalCart
    })

    async function getCartItem(deviceType) {
        try {
            const cartArr = await axios.get('http://localhost:4000/book_publisher/cart', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (cartArr.data.err) {
                return alert(cartArr.data.err)
            }
            disptach(changeCartList(cartArr.data))
            if (deviceType == 'big') {
                document.getElementById('cart').style.left = "68%"
            } else {
                document.getElementById('cart').style.left = "0%"
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div>
            {/* desktop screen */}
            <nav className="hidden lg:flex my-2 ml-3 justify-between">
                <section className=" sm:text-2xl lg:text-2xl font-semibold flex items-center tracking-widest">
                    <Link to='/'>
                        <div className="border-4 border-black text-white bg-black  bold p-2">BOOK <span className="bg-white text-blue-950 p-2">PUBLISHER</span></div>
                    </Link>
                </section>
                <section className="flex w-1/2 justify-around  items-center text-2xl">
                    <span className="cursor-pointer"><Link to='/bookstore'> Bookstore</Link></span>
                    <span className="cursor-pointer"><Link to='/orderstatus'>Order</Link></span>
                    <span className="cursor-pointer"><Link to='/contact'>Contact</Link></span>
                    <section className="flex items-center">
                        <Link to='/login'> <span className="flex items-center cursor-pointer "><FaCircleUser />  <span className="ml-4">Sign In</span></span></Link>
                        <div className="flex cursor-pointer" onClick={() => getCartItem('big')}>
                            <span className="text-5xl relative right-2"><BiCartAdd /></span>
                            <span className="absolute text-white rounded-xl  text-base top-4 bg-blue-950  p-1 pt-0 pb-0" >{totalCartItem}</span>
                        </div>
                    </section>
                </section>
            </nav>







            {/* Small screen */}

            <div style={{ height: topNav, zIndex: 1 }} className="overflow-hidden bg-white  text-2xl  flex flex-col items-center ">
                <div className="  w-full flex justify-end pr-3 text-4xl cursor-pointer" onClick={() => setTopNav('0')}><IoClose /></div>
                <Link to='/login'><span className="flex items-center cursor-pointer " onClick={() => setTopNav('0')}><FaCircleUser />  <span className="ml-4">Sign In</span></span></Link>
                <span className="cursor-pointer hover:text-blue-600" onClick={() => setTopNav('0')}><Link to='/bookstore'> Bookstore</Link></span>
                <span className="cursor-pointer hover:text-blue-600" onClick={() => setTopNav('0')}>Order</span>
                <span className="cursor-pointer hover:text-blue-600" onClick={() => setTopNav('0')}><Link to='/contact'>Contact</Link></span>
            </div>



            <nav className="flex lg:hidden my-2 ml-3 justify-between">

                <section className="text-2xl font-semibold flex items-center">
                    <Link to='/'>
                        <div className="border-4 border-black text-white bg-black  bold p-2">BOOK <span className="bg-white text-blue-950 p-2">PUBLISHER</span></div>
                    </Link>
                </section>
                <section className="flex items-center">

                    <div className="flex" >
                        <span className="text-5xl relative right-2" onClick={() =>getCartItem('small')}><BiCartAdd /></span>
                    </div>
                    <span className="flex items-center cursor-pointer text-3xl " onClick={() => setTopNav('100vh')}><BsThreeDotsVertical /></span>
                </section>
            </nav>
            <div className="flex lg:hidden justify-end  "><span className="bg-blue-950 h-2/3 rounded-3xl text-white p-1 relative px-2 bottom-16 right-16" >{totalCartItem}</span></div>


        </div>
    )
}