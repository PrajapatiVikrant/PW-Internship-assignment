import React from "react";
import BookSlider from "./BookSlider";
import Category from "./Category";
export default function SampleBook(){
    
    return (
       <>
       <div className="flex flex-col items-cente" >
          <h2 className="text-center text-7xl font-bold text-blue-950">
            <span className="text-3xl font-bold">BOOK PUBLISHER</span> <br />
            TOP BOOKS 
           </h2>
          
           <div className="flex flex-col items-center mt-20 bg-blue-950">
           <BookSlider/>
           <br /><br />
           <div className="text-white flex flex-col items-center">
           <span>__________</span>
           <br />
           <h2 className="lg:text-7xl md:text-5xl text-3xl">BOOKS CATEGORY</h2>
           <Category/>
           
           <span>__________</span>
           </div>
           </div>
          
           
          
          
       </div>

       </> 
    )
}