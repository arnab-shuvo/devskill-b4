import HeroSection from "./HeroSection";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const About = () => {
 
  const data = {
    name: "E-Shop",
  };

  return (
    <>
     <Navbar/>
      <HeroSection myData={data} />
      <br/>
      <Footer/>
    </>
  );
};

export default About;
