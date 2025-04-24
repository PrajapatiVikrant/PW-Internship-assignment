import React from "react";
import { MdOutlinePreview } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { LuPackageCheck } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function OrderStatus(){
    return (
        <center>
        <div className="flex flex-col w-fit justify-center text-3xl ">
          
            <div className="flex  items-center m-5  ">
                <MdOutlinePreview/> <span className="ml-3">Application viewed</span>
            </div>
            <div className="flex items-center m-5  ">
                <GiConfirmed/> <span className="ml-3">Application confirmation</span>
            </div>
            <div className="flex items-center m-5 ">
                <LuPackageCheck/> <span className="ml-3">Prepare & pack</span>
            </div>
            <div className="flex items-center m-5  ">
                <MdOutlineDeliveryDining/> <span className="ml-3">Out for delivery</span>
            </div>
            
            
        </div>
        </center>
    )
}