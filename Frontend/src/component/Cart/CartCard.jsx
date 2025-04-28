import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { CiTrash } from "react-icons/ci";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeCartList } from "../../State/Slice/CartSlice";


const CartCard = ({details})=>{
    const [qty,setQty] = useState(details.qty)
    const [edit,setedit]= useState(false);
    const cartList = useSelector(state=>state.cartList);
    const disptach = useDispatch()
    
    async function handleEdit(){
      try {
        const response =  await axios.put(`http://localhost:4000/book_publisher/cart/${details._id}`,
          {  
              qty:qty
          },
          {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            }
      )
      if(response.data.err){
       return alert(response.data.err);
      }
      alert(response.data.message)
      setedit(false)
      } catch (error) {
        console.log(error.message)
      }
    }

    async function handleDelete(){
      try{
          const response = await axios.delete(`http://localhost:4000/book_publisher/cart/${details._id}`,{
            headers:{
               Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          });
          if(response.data.err){
            return alert(response.data.err);
          }
          const updatedList = cartList.filter((item)=>item._id != details._id)
          console.log(updatedList)
          disptach(changeCartList(updatedList))
          return alert(response.data.message)
      }catch(err){
        console.log(err.message)
      }
    }
    return (
        <>
        {(!edit)?(
            <article className="flex p-2 w-[100%]">
            <img className="w-[100px] " src={details.url} alt="bookImage" />
            <section className="p-2 w-[50%] border">
              <h1 className="flex justify-between items-center "><strong>{details.title}</strong><GrEdit className="cursor-pointer" onClick={()=>setedit(true)} /></h1>
              <h2 className="text-[14px]">{details.category}</h2>
              <p>${details.price}</p>
              <p className="flex items-center">Qty: {qty}</p>
              <button className="flex items-center justify-center w-full" onClick={handleDelete}><CiTrash /> Remove</button>
            </section>
          </article>
        ):(
            <article className="flex p-2 w-[100%]">
            <img className="w-[100px] " src={details.url} alt="bookImage" />
            <section className="p-2 w-[50%] border">
              <h1 className="flex justify-between items-center "><strong>{details.title}</strong></h1>
              <h2 className="text-[14px]">{details.category}</h2>
              
              <p>${details.price}</p>
              <p className="flex items-center">Qty: $<input type="number" value={qty} onChange={(e)=>e.target.value>0?setQty(e.target.value):setQty(qty)} className=" w-[30%] border-2 border-black p-1" /></p>
              <button className="flex items-center justify-center w-full m-2 bg-green-600 text-white hover:bg-green-400 transition-all duration-1000 ease-linear" onClick={handleEdit}> Save</button>
            </section>
          </article>
        )}
      </>
    )
}
export default CartCard;