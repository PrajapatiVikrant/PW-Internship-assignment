import React from "react";
import logo from "../Assets/Logo.svg"
import { TiShoppingCart } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import "./Navbar.css"

export default function Navbar(){

    return (
         <nav>
            <div className="logoNav">
                <img className="logo" src={logo} alt="websiteLogo" />

                 {/* product category */}
                 <div className="navspanst leftNav">
                    <span className="navItem">EVERYTHING</span>
                    <span className="navItem">WOMEN</span>
                    <span className="navItem">MEN</span>
                    <span className="navItem">ACCESSORIES</span>
                 </div>
            </div>
             {/* website pages */}
             <div className="navlist rightNav">
                        <span className="navItem">ABOUT</span>
                        <span className="navItem">CONTACT US</span>
                        <span className="navItem">MY ORDER</span>
                        <TiShoppingCart className="navItem navIcon"/>
                        <div className="cartCircle">0</div>
                        <FaUserTie className="navItem navIcon"/>
                 </div>
         </nav>
    )
}