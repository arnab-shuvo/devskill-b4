import "./App.css";

import Navbar from "./component/Navbar";
import CoverSection from "./component/CoverSection";
import AboutMe from "./component/AboutMe";
import { Services } from "./component/ServicesSection";
import { MySkills } from "./component/MySkills";
import { Header } from "./component/Header";
import { Testimonials } from "./component/Testimonials";
import Blog from "./component/Blog";
import { Portfolio } from "./component/Portfolio";
import { Contact } from "./component/Contact";
import { Client } from "./component/Client";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <CoverSection />
        <Header />
        <AboutMe />
        <MySkills />
        <Services />
        <Blog />
        <Testimonials />
        <Portfolio />
        <Contact />
        <Client />
        <Footer />
      </main>
    </div>
  );
}

export default App;
