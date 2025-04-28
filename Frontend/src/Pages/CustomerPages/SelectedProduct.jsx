import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../../State/Slice/CartCountSlice";


export default function SelectedProduct() {
    const product = useSelector((state)=>{
        return state.selectProduct
    })
    const dispatch = useDispatch();
   async function addToCart(){
    try {
      const cartArr = await axios.get('http://localhost:4000/book_publisher/cart',{headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }})
     
     if(cartArr.data.err){
      return alert(cartArr.data.err)
     }

    const exist  =    cartArr.data.filter((item)=> product.category == item.category && product.title == item.title && product.url == item.url)
    if(exist[0]){
        return alert("item already added")
    }
     
      const response =  await axios.post('http://localhost:4000/book_publisher/cart',
            {
                
                url:product.url,
                category:product.category,
                title:product.title,
                price:product.price,
                qty:1
            },
            {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              }
        )
        if(!response.data.err && response.data.status != 500){
             dispatch(increment())
        }
       alert(response.data.message)
    } catch (error) {
        console.log(error)
    }
   }
    return (
        <section className="text-gray-600 body-font overflow-hidden flex justify-center">
            <div className="container px-5 py-24 mx-auto w-[800px]">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className=" object-cover object-center rounded" src={product.url}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                          
                            <p className="leading-relaxed">{product.description}</p>
                           
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addToCart}>Add to Cart</button>
                               
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}