import React from "react";
import Navbar from "../../component/Navbar";
import Welcome from "../../component/Home/Welcome";
import SampleBook from "../../component/Home/SampleBook";
import Footer from "../../component/Footer";
export default function  Home(){

    return (
        <>
        <Navbar/>
        <Welcome/>
        <SampleBook/>
        <Footer/>
        </>
    )
    
}