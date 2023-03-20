import { Container, Grid } from '@mui/material';

export const Client = () => {
  return (
    <section id="clients">
      <Container>
        <h2 className="text-center mb-5 display-4">Our Clients</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <img src={require("./images/client1.jpg")} height="200" alt="Client 1" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={require("./images/client2.jpg")} height="200" alt="Client 2" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={require("./images/client3.jpg")} height="200" alt="Client 3" />
          </Grid>
          <Grid item xs={6} md={3}>

          {/* src={require("./images/profile-pic.png")} */}

            <img src={require("./images/client4.jpg")} height="200" alt="Client 4" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
