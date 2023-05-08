import HeroSection from "./HeroSection";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Profile = () => {
 
  const data = {
    name: "E-Shop",
  };

  return (
    <>
     <Navbar/>
      <HeroSection myData={data} />
      <Footer/>
    </>
  );
};

export default Profile;
