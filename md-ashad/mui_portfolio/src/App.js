import {
  Container,
  Box,
  Link,
  Button,
  CssBaseline,
  Typography,
} from "@mui/material";
import MyExperince from "./components/MyExperince";
import LogoImage from "./img/Logo.png";
import portfolioImage from "./img/portfolio_man_5.png";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="100%"
        sx={{
          height: "95vh",
          backgroundImage:
            "url(https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_41920x800.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // marginTop: "10px",
            padding: "10px 0",
          }}
        >
          <Link>
            <img src={LogoImage} alt="Logo" />
          </Link>
          <Button>Click</Button>
        </Box>
        <Box sx={{ padding: "160px 160px 0 160px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h1"
              color="initial"
              sx={{ fontWeight: "bold" }}
            >
              Keiths Williams
            </Typography>
            <Typography
              variant="p"
              color="initial"
              sx={{ fontSize: "3rem", letterSpacing: "6px" }}
            >
              Senior Developer
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button variant="outlined">View Portfolio</Button>
            <Button variant="contained">Download Resume</Button>
          </Box>
        </Box>
      </Container>
      <Container sx={{ marginTop: "-6rem", display: "flex" }}>
        <img src={portfolioImage} alt="Portfolio" />
        <Box sx={{ padding: "10rem 0 0 3rem" }}>
          <Typography variant="h1">About me</Typography>
          <Typography paragraph="true">
            Hello, I’m a UI/UX Designer & Frontend Developer from Victoria,
            Australia. I hold a master degree of Web Design from the World
            University.
          </Typography>

          <Typography paragraph="true">
            Hello, I’m a UI/UX Designer & Frontend Developer from Victoria,
            Australia. I hold a master degree of Web Design from the World
            University.
          </Typography>
          <Button variant="outlined">Download Resume</Button>
        </Box>
      </Container>
      <MyExperince />
    </>
  );
}

export default App;
