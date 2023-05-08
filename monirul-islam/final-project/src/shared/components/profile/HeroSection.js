import { NavLink } from "react-router-dom";
import hero from './hero.jpg';
import {productInitialState}  from '../login/login.slice';
import login from "assets/images/login.jpg";
import { Button } from "../styles/Button";
import { resetForm, userInfoSelector, errorSelector } from "../../../client/components/profile/profile.slice";
import { useSelector } from "react-redux";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  const initialValues = useSelector(userInfoSelector);
  console.log(initialValues.userInfo);
  return (
    <>
     
        <section className="w-full flex">
            <section className="w-full justify-start md:justify-start mx-auto lg:w-full flex flex-col">
                <div className=" w-full flex flex-col justify-start md:justify-start my-auto pt-0 md:pt-0 px-8 md:px-24 lg:px-32">
                   
                    <div className="text-left pt-8 pb-12">
                      <h1 style={{fontSize:"35px",fontWeight:"bold"}}>
                      {productInitialState.userInfo.user}             
                      </h1>
                      <h2 style={{fontSize:"25px",fontWeight:"bold",color:"blue"}}> Role=
                      {productInitialState.userInfo.role} </h2>
                      <h2 style={{fontSize:"15px",fontWeight:"bold",color:"green"}}> Name=
                      {productInitialState.userInfo.firstname} </h2>
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
