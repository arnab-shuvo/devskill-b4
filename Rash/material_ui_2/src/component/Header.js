import { Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              My Portfolio
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Welcome to my portfolio website. Here you can find information
              about my skills, experience, and projects.
            </Typography>
            <Button variant="outlined" color="primary">
              View Portfolio &gt;
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={require("./images/profile-pic.png")}
              height="200"
              alt="Profile Picture"
              className="img-fluid"
            />
          </Grid>
        </Grid>
      </Container>
    </StyledHeader>
  );
};
