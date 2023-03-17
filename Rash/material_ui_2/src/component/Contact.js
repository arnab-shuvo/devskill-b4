import { Container, Grid, Typography, TextField, Button } from '@mui/material';

export function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>
                <i className="fa fa-envelope-o fa-fw"></i> example@example.com
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i> 123-456-7890
              </li>
              <li>
                <i className="fa fa-map-marker fa-fw"></i> 123 Main St, Anytown USA
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <form>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                margin="normal"
                placeholder="Enter your name"
              />
              <TextField
                fullWidth
                id="email"
                label="Email address"
                variant="outlined"
                margin="normal"
                placeholder="Enter your email"
              />
              <TextField
                fullWidth
                id="message"
                label="Message"
                variant="outlined"
                margin="normal"
                placeholder="Enter your message"
                multiline
                rows={4}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
