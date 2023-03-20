import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CoverSection = styled("section")({
  backgroundColor: "#f8f9fa",
  paddingTop: "5rem",
  minHeight: "100vh",
});

const AboutSection = styled("section")({
  paddingTop: "5rem",
  paddingBottom: "5rem",
});

const AboutContainer = styled(Container)({
  height: "100%",
});

const AboutGrid = styled(Grid)({
  height: "100%",
});

const AboutImg = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});

function AboutMe() {
  return (
    <AboutSection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique diam vel lorem consectetur, at tempor velit interdum.
              Donec fringilla convallis velit, vel commodo enim euismod id.
              Donec venenatis ante nec risus luctus euismod. Fusce vehicula
              ipsum id risus luctus, sed pellentesque odio eleifend. Sed at
              tortor in nulla faucibus ornare. In hendrerit euismod arcu sit
              amet ultrices.
            </Typography>
            <Button variant="outlined">Download Resume</Button>
          </Grid>
          <Grid item md={6}>


            <AboutImg src={require("./images/about-me.jpg")} height="200" alt="About Me" />
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
}

export default AboutMe;