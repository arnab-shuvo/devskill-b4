import { NavLink } from "react-router-dom";
import styled from "styled-components";
import hero from './hero.jpg';
import login from "assets/images/login.jpg";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  
  
  return (
    <>
     {/* <h2 >Welcome to </h2>
      <div className="w-3/4 flex justify-content right">
        
        <div className="w-1/2 mx-auto lg:w-1/2 flex flex-col">
          
            <h2> {name} </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            {/* <NavLink>
              <Button>show now</Button>
            </NavLink> 
          </div>
          {/* our homepage image  
          
          <div className="hero-section-image">
            <figure>
              <img
                src={hero}
                alt="hero-section-photo"
                className="img"
              />
            </figure>
          </div>
        </div> */}
        <section className="w-full flex">
            <section className="w-full justify-start md:justify-start mx-auto lg:w-full flex flex-col">
                <div className=" w-full flex flex-col justify-start md:justify-start my-auto pt-0 md:pt-0 px-8 md:px-24 lg:px-32">
                   
                    <div className="text-left pt-8 pb-12">
                      <h2 style={{fontSize:"25px",fontWeight:"bold",color:"blue"}}>Welcome to  </h2>
                      <h1 style={{fontSize:"35px",fontWeight:"bold"}}>{ name }</h1>
                        <p className="text-left pt-8"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                      atque temporibus veniam doloribus libero ad error omnis voluptates
                      animi! Suscipit sapiente.
                           
                        </p>
                        <br/>
                         <NavLink>
                          <Button >Show Now</Button>
                        
                        </NavLink>  
                    </div>
                </div>
            </section>
            <section className="w-full hidden md:flex md:items-center">
            <img
                src={hero}
                alt="hero-section-photo"
               style={{paddingTop: "60px",paddingRight:"60px"}}
              />
            </section>
        </section>
        </>
  );
};


export default HeroSection;
