import { Container, Grid, Paper, Typography } from '@mui/material';

export const Services = () => {
  return (
    <section id="services">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          My Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Web Design
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
                velit elit. Nam nec elit nec.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Web Development
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
                velit elit. Nam nec elit nec.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                SEO Optimization
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
                velit elit. Nam nec elit nec.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
