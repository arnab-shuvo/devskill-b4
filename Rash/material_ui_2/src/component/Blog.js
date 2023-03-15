import { Container, Grid, Typography } from "@mui/material";

function Blog() {
  return (
    <section id="blog">
      <Container>
        <Typography variant="h4" component="h2" className="display-4">
          Blog
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3">
              Blog Post 1
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              velit elit. Nam nec elit nec.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3">
              Blog Post 2
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              velit elit. Nam nec elit nec.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3">
              Blog Post 3
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              velit elit. Nam nec elit nec.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Blog;
