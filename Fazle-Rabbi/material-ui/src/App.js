import Button from "@mui/material/Button";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
import styled from "@emotion/styled";
import HeroCoverImage from "./images/portfolio_man_41920x800.png";
import { Typography, Box } from "@mui/material";
import BlogPost from "./components/BlogPost/BlogPost";
import BlogImage from "./images/laptop-1209008.jpg";
import BlogImage2 from "./images/image2.jpg";
import BlogImage3 from "./images/image3.jpg";

// const MainBody = styled(Hero)({
//   backgroundImage: `url(${HeroCoverImage})`,
// });

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero
          sx={{ p: 1 }}
          children={
            <>
              <h4>Fazle Rabbi</h4>
              <Typography>Software Engineer</Typography>
              <Button>Download Resume</Button>
            </>
          }
        />
        <Hero
          sx={{ p: 1 }}
          children={
            <>
              <h4>About me</h4>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </Typography>
              <Button>Hire me!</Button>
            </>
          }
        />
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
