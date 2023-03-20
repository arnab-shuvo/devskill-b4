import { Box, Container, Typography } from "@mui/material";

const CoverSection = () => {
  return (
    <Box id="cover" sx={{ bgcolor: "#f8f9fa" }}>
      <Container>
        <Box py={5}>
          {/* <img src="images/portfolio-1.jpg" alt="Image Description" /> */}
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Welcome to my portfolio!
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed velit at est consequat bibendum sed id eros.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CoverSection;
