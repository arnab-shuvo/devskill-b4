import React from "react";
import { NavLink } from "react-router-dom";

import banner from "assets/images/banner.jpg";
import { SIGNUP, PRODUCT, CART,LOGIN } from "utils/constants";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import background from "assets/images/hero.jpg";

export default function Home({ isLoggedIn }) {
    return ( <>
    <Navbar/>
        <section
            className="pt-12 md:pt-0 w-full mx-auto bg-gray-100 flex md:items-center bg-cover bg-right"
            style={{
                minHeight: "92vh",
                width: "auto",
                backgroundImage: `url(${banner})`,
            }}
        >
            <div
                className="w-full bg-white bg-opacity-70 flex justify-center items-center"
                style={{
                    minHeight: "92vh",
                }}
            >
                <div className="mx-auto flex flex-col w-3/4 md:w-1/2 justify-center items-center p-8 md:p-24 tracking-wide bg-white bg-opacity-80 rounded-2xl shadow-lg" style={{
                    backgroundImage: `url(${background})`,
                     minHeight: "auto",
                     width: "auto",
                     backgroundRepeat:"no-repeat"}}>
                    <h1 className="font-light text-6xl mb-12" style={{color:"coral"}}>
                        DO YOU WANT TO ONLINE SHOPPING?
                    </h1>
                   
                    <div className="flex flex-col md:flex-row">
                        <NavLink
                            className="px-4 py-2 mb-4 md:mr-4 bg-green-400 inline-block text-lg font-Bold transform transition-all hover:scale-110 border-2 border-red-400 hover:border-red-600 text-gray-800 rounded-sm"
                            to={isLoggedIn ? CART : SIGNUP}
                            style={{
                                color:"Highlight",
                                fontWeight: 'bold'
                            }}
                        >
                            {isLoggedIn ? "Go to Cart" : "REGISTER NOW"}
                        </NavLink>
                        <NavLink
                            className="px-4 py-2 mb-4 md:mr-4 bg-green-200 inline-block text-lg font-Bold transform transition-all hover:scale-110 border-2 border-red-400 hover:border-red-600 text-gray-800 rounded-sm"
                            to={LOGIN}
                            style={{
                                color:"Highlight",
                                fontWeight: 'bold'
                            }}
                        >
                             LOGIN
                        </NavLink>

                        <NavLink
                            className="px-4 py-2 mb-4 md:mr-4 inline-block text-lg font-Bold transform transition-all hover:scale-110 border-2 border-red-400 hover:border-red-600 text-gray-800 rounded-sm"
                            to={PRODUCT}
                            style={{
                                color:"Highlight",
                                fontWeight: 'bold'
                            }}
                        >
                           VISIT PRODUCTS
                        </NavLink>
                        
                    </div>
                   
                </div>
               
            </div>
           <div>
         
           </div>
        </section>
       <section>
       <Footer/>
       </section>
       </>
    );
}
