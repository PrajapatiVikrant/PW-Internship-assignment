import React from "react";

import { Link } from "react-router";



export default function ProductCard({ category, url, title,description, price }) {
    
    return (
        <Link to='/selected'>
            <article className="flex flex-col p-1 group relative w-[300px] h-[322px]">
                <h1>{category}: {title}</h1>
               
                <img
                    className="w-[300px] h-[300px] object-cover"
                    src={url}
                    alt="bookImage"
                />

                <button
                    className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-[327px]  bg-white bg-opacity-65 text-black flex items-center justify-center"
                >
                    Quick View
                </button>

            </article>

        </Link>
    )
}