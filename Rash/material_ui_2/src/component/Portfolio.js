import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, requirePropFactory } from '@mui/material';
 


export const Portfolio = () => {
  return (
    <section>
      <Container>
        <Typography variant="h4" className="">Portfolio</Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"

                image={require("./images/portfolio-1.jpg")}
                alt="Project 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Project 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique diam vel lorem consectetur, at tempor velit interdum.
                </Typography>
                <Button variant="outlined" href="#" sx={{ mt: 2 }}>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={require("./images/portfolio-2.jpg")}
                alt="Project 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Project 2</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique diam vel lorem consectetur, at tempor velit interdum.
                </Typography>
                <Button variant="outlined" href="#" sx={{ mt: 2 }}>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={require("./images/portfolio-3.jpg")}
                alt="Project 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Project 3</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique diam vel lorem consectetur, at tempor velit interdum.
                </Typography>
                <Button variant="outlined" href="#" sx={{ mt: 2 }}>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
