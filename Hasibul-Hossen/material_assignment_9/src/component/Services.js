import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import blogImg1 from "../img/blogImg1.jpg"
import blogImg2 from "../img/blogImg2.jpg"
import blogImg3 from "../img/blogImg3.jpg"
import sliderBg1 from "../img/sliderBg1.jpg"

const Services = () => {
    return (
        <>
            <div className='header-area' style={{backgroundColor: "#ccc"}}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems='center'>
                        <Grid item lg={4}>
                            <h4 className='logo'>Hasibul</h4>
                        </Grid>
                        <Grid item lg={8}>
                            <div className='menu'>
                                <ul>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>About</a>
                                    </li>
                                    <li>
                                        <a href='#'>Service</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='hero-img'>
                <img src={sliderBg1} alt='img not found' />
            </div>
            <div className='service-area' style={{ marginTop: 60 }}>
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ marginBottom: 30, display: "inline-block", fontSize: 32 }}>Blogs</h3>
                </div>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item lg={4}>
                            <Card>
                                <img src={blogImg1} alt='img not found' />
                                {/* <CardMedia sx={{ height: 140 }} image={blogImg1} title="green iguana" /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Getting started with business level improved
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="secondary">Share</Button>
                                    <Button size="small" variant="contained" color="primary">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <img src={blogImg2} alt='img not found' />
                                {/* <CardMedia sx={{ height: 140 }} image={blogImg1} title="green iguana" /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Getting started with business level improved
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="secondary">Share</Button>
                                    <Button size="small" variant="contained" color="primary">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <img src={blogImg3} alt='img not found' />
                                {/* <CardMedia sx={{ height: 140 }} image={blogImg1} title="green iguana" /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Getting started with business level improved
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="secondary">Share</Button>
                                    <Button size="small" variant="contained" color="primary">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default Services;