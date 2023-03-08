import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Services = () => {
    return (
        <div className='service-area' style={{ marginTop: 60 }}>
            <div style={{ textAlign: "center" }}>
                <h3 style={{ marginBottom: 30, display: "inline-block", fontSize: 32 }}>Material UI</h3>
            </div>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item lg={4}>
                        <Card>
                            <img src='blog-img-1.jpg' alt='img not found' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Getting started with business level improved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="success">Share</Button>
                                <Button size="small" variant="contained" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card>
                            <img src='blog-img-2.jpg' alt='img not found' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Getting started with business level improved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="success">Share</Button>
                                <Button size="small" variant="contained" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card>
                            <img src='blog-img-3.jpg' alt='img not found' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Getting started with business level improved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="success">Share</Button>
                                <Button size="small" variant="contained" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card>
                            <img src='blog-img-4.jpg' alt='img not found' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Getting started with business level improved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="success">Share</Button>
                                <Button size="small" variant="contained" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card>
                            <img src='blog-img-5.jpg' alt='img not found' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Getting started with business level improved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="success">Share</Button>
                                <Button size="small" variant="contained" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card>
                            <img src='blog-img-6.jpg' alt='img not found' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Getting started with business level improved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faceted search built off of Elasticsearch, including custom field support for refined searchable partner.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="success">Share</Button>
                                <Button size="small" variant="contained" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Services;