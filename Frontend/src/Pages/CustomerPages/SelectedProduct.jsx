import { useSelector } from "react-redux"


export default function SelectedProduct() {
    const product = useSelector((state)=>{
        return state.selectProduct
    })
    console.log("select product",product)
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
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                               
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}