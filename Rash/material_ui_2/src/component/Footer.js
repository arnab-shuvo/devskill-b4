import { Container, Grid, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <footer sx={{ backgroundColor: 'lightgray', color: 'white', py: 3 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              My Info
            </Typography>
            <Typography variant="body1" gutterBottom>
              Name: John Doe
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: john.doe@example.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: 123-456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
            <ul>
              <li>
                <Link href="#">Project 1</Link>
              </li>
              <li>
                <Link href="#">Project 2</Link>
              </li>
              <li>
                <Link href="#">Project 3</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
