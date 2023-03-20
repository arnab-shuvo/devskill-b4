import Button from "@mui/material/Button";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
// import styled from "@emotion/styled";
import CoverImage from "./images/portfolio_man_41920x800.png";
import CoverImage2 from "./images/portfolio_man_5.png";
import CoverImage3 from "./images/laptop-1209008.jpg";
import { Typography, Box } from "@mui/material";
import BlogPost from "./components/BlogPost/BlogPost";
import BlogImage from "./images/laptop-1209008.jpg";
import BlogImage2 from "./images/image2.jpg";
import BlogImage3 from "./images/image3.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero
          sx={{ p: 1 }}
          backgroundImage={CoverImage}
          height="650px"
          children={
            <>
              <h1>Fazle Rabbi</h1>
              <Typography>Software Engineer</Typography>
              <Button>Download Resume</Button>
            </>
          }
        />
        <Hero
          sx={{ p: 1 }}
          height="750px"
          children={
            <div style={{ display: "flex" }}>
              <img
                src={CoverImage2}
                style={{ marginTop: "-55px" }}
                alt=""
              ></img>
              <div>
                <h1>About me</h1>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae.
                </Typography>
                <Button>Hire me!</Button>
              </div>
            </div>
          }
        />

        <h1>My Skills</h1>
        <Box
          sx={{
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
          }}
          style={{
            height: "300px",
            width: "100%",
            position: "relative",
            backgroundImage: `url(${CoverImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Typography sx={{ color: "#FFFFFF", p: 2 }} variant="h3">
            Python
          </Typography>
          <Typography sx={{ color: "#FFFFFF", p: 2 }} variant="h3">
            Django
          </Typography>
          <Typography sx={{ color: "#FFFFFF", p: 2 }} variant="h3">
            Typescript
          </Typography>
          <Typography sx={{ color: "#FFFFFF", p: 2 }} variant="h3">
            Reactjs
          </Typography>
        </Box>

        <h1>My Services</h1>
        <Box sx={{ display: "flex" }}>
          <Service
            sx={{ p: 2 }}
            children={{
              title: "Web Development",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            }}
          />
          <Service
            sx={{ p: 2 }}
            children={{
              title: "Business Process Automation",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            }}
          />
          <Service
            sx={{ p: 2 }}
            children={{
              title: "Data Analysis",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            }}
          />
        </Box>

        <h1>Blogs</h1>
        <Box sx={{ display: "flex", "justify-content": "space-between", p: 2 }}>
          <BlogPost
            children={{
              image: BlogImage,
              title: "Is AI art ethical?",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
            }}
          />
          <BlogPost
            children={{
              image: BlogImage2,
              title: "Why tomatoes are the best",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
            }}
          />
          <BlogPost
            children={{
              image: BlogImage3,
              title: "How to be a good mentee",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
            }}
          />
        </Box>
        <Footer />
      </div>
    </div>
  );
}

export default App;
