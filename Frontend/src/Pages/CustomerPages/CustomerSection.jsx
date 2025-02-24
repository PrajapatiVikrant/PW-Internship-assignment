import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Route, Routes } from "react-router";
import Home from "./Home";
import BookStore from "./BookStore";
import Contact from "./Contact";
import SelectedProduct from "./SelectedProduct";
import Signup from "./SignUp";
import Login from "./Login";

export default function CustomerSection(){

    return (
          <>
          <Navbar/>

         <Routes>
            <Route path="/" Component={Home}/>
            <Route path = "/login" Component={Login}/>
            <Route path = "/signup" Component={Signup}/>
            <Route path="/bookstore" Component={BookStore}/>
            <Route path="/selected" Component={SelectedProduct}/>
            <Route path="/contact" Component={Contact}/>
         </Routes>

          <Footer/>
          
          </>
    )
}