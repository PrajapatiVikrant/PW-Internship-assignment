import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [validEmail,setValidEmail] = useState('')
    const [validPassword,setValidPassword] = useState('')
    const navigate = useNavigate();

    const handleLogin = async()=>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log("execute")
        setValidEmail('')
        setValidPassword('')
        if(email){
            
            if(!emailPattern.test(email)){
                return setValidEmail("email must contain charater,@,.com")
            }
           
        }else{
          return  setValidEmail("email is required")
        }
       
        if(password){
            if(password.length<6){
              setValidPassword("password's lenght must be 8 or more")
            }
        }else{
            return setValidPassword("password is required")
        }
        const response = await axios.post('http://localhost:4000/book_publisher/auth/login',{
            email,password
           });
           console.log(response.data);
           alert(response.data.message);
           response.data.status==200 && localStorage.setItem("token",response.data.token)
           response.data.status == 200 && navigate('/');
           location.reload()
         
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign In</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Login with your email and password</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex items-center flex-col -m-2">
                        
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                <p className="text-red-800 text-[13px]">{validEmail}</p>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="name" value={password} onChange={(e)=>setpassword(e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                <p className="text-red-800 text-[13px]">{validPassword}</p>
                            </div>
                        </div>
                        
                        <div className="p-2 w-full">
                            <button onClick={handleLogin} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <div>
                                Do you have no account? <Link to='/signup'  className="text-indigo-500">Sign Up</Link>
                            </div>
                            <p className="leading-normal my-5">49 Smith St.
                                <br/>Saint Cloud, MN 56301
                            </p>
                            <span className="inline-flex">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

