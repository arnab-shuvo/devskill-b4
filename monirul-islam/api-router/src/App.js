// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Grid } from '@mui/material';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function App() {
//   const [products, setProdut] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
//       .then((res) => {
//         setProdut(res.data);
//       });
//   }, []);

//   return (
//     <Grid container spacing={2}>
//       {products.map((product) => (
//         <Grid key={product.id} item xs={8} lg={2}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//               sx={{ height: 140 }}
//               image={product.images[0]}
//               title="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {product.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 djsff
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>

//   );
// }

// export default App;
