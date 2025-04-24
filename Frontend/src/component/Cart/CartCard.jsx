import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { CiTrash } from "react-icons/ci";

const CartCard = ()=>{
    const [qty,setQty] = useState(1)
    const [edit,setedit]= useState(false);
    return (
        <>
        {(!edit)?(
            <article className="flex p-2 w-[100%]">
            <img className="w-[100px] " src="https://static.wixstatic.com/media/ea71bb_6e25ea940ab940faae33662de0742483~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_324,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_6e25ea940ab940faae33662de0742483~mv2_d_2479_2483_s_4_2.jpg" alt="bookImage" />
            <section className="p-2 w-[50%] border">
              <h1 className="flex justify-between items-center "><strong>The Midnight Library</strong><GrEdit className="cursor-pointer" onClick={()=>setedit(true)} /></h1>
              <h2 className="text-[14px]">Novels</h2>
              <p>$25.00</p>
              <p className="flex items-center">Qty: 1</p>
              <button className="flex items-center justify-center w-full"><CiTrash /> Remove</button>
            </section>
          </article>
        ):(
            <article className="flex p-2">
            <img className="w-[100px] " src="https://static.wixstatic.com/media/ea71bb_6e25ea940ab940faae33662de0742483~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_324,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_6e25ea940ab940faae33662de0742483~mv2_d_2479_2483_s_4_2.jpg" alt="bookImage" />
            <section className="p-2 w-[50%] border">
              <h1 className="flex justify-between items-center "><strong>The Midnight Library</strong><GrEdit className="cursor-pointer" /></h1>
              <h2 className="text-[14px]">Novels</h2>
              
              <p>$25.00</p>
              <p className="flex items-center">Qty: $<input type="number" value={qty} onChange={(e)=>e.target.value>0?setQty(e.target.value):setQty(qty)} className=" w-[30%] border-2 border-black p-1" /></p>
              <button className="flex items-center justify-center w-full m-2 bg-green-600 text-white hover:bg-green-400 transition-all duration-1000 ease-linear" onClick={()=>setedit(false)}> Save</button>
            </section>
          </article>
        )}
      </>
    )
}
export default CartCard;