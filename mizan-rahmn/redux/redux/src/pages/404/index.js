import Grid from "@mui/material/Grid";

const NotFound = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        <Grid item xs={12}>
          <h3>Product Not Found....</h3>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotFound;