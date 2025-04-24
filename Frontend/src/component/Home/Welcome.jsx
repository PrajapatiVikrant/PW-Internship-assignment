import React from "react";
import BackgroundImage from "../welcome.svg"

export default function Welcome() {

  const welcomeStyle = {
    backgroundImage: `url(${BackgroundImage})`, 
  }

  

  return (
    <div style={welcomeStyle} className=" w-full relative bg-no-repeat bg-cover h-[500px]  rounded-xl overflow-hidden">
      
      <div className="flex flex-col items-start pl-[10%] justify-center  h-full text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl ">
           Books to Helps You Travel <br />
            to a Different World <br />
         
            <button className="mt-5 border border-black rounded hover:bg-black hover:text-white text-2xl px-4 cursor-pointer p-2 transition-all duration-1000 ease-linear">Shop Now</button>
         
      </div>
       
    </div>

  )
}