import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Route, Routes } from "react-router";
import Home from "./Home";
import BookStore from "./BookStore";

export default function CustomerSection(){

    return (
          <>
          <Navbar/>

         <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/bookstore" Component={BookStore}/>
         </Routes>

          <Footer/>
          
          </>
    )
}