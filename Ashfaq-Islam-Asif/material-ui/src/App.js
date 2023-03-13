import "./App.css";
import { Box } from "@mui/material";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";
import MySkills from "./Components/MySkills";

function App() {
  return (
    <Box>
      <Introduction />
      <AboutMe />
      <MySkills />
    </Box>
  );
}

export default App;
