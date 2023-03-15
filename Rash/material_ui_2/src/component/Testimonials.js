import { Typography, Grid, Box } from '@mui/material';

export const Testimonials = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              velit elit. Nam nec elit nec.
            </Typography>
            <Typography variant="subtitle2" align="right">
              John Doe, CEO at ABC Inc.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              velit elit. Nam nec elit nec.
            </Typography>
            <Typography variant="subtitle2" align="right">
              Jane Smith, Designer at XYZ Inc.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
