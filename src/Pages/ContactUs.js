import React from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DisplayLottie from '../Components/DisplayLottie';
import '../Static/Css/Contact.css';


function ContactUs() {
    return(
        <>
            <Navbar />
            <div className='form'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} columns={12}>
                        <Grid item xs={6}>
                            <DisplayLottie animationPath='./Lottie/CU.json' width='75%' height='75%' />
                        </Grid>
                        <Grid className='grid-2' item xs={6}>
                            <Typography sx={{ fontSize: 24 }} gutterBottom>
                                Contact Us
                            </Typography>
                            <dev className='contact-details'>
                                <Typography className='pitch-me' sx={{ fontSize: 22 }} gutterBottom>
                                    Contact Details
                                </Typography>
                                <div className='mail'>
                                    <p className='ceo' sx={{ fontSize: 18 }}>
                                        Email id of our CEO:
                                    </p>
                                    <a className='email' href="mailto:arnab.gupta.ar7@gmail.com">  arnab.gupta.ar7@gmail.com</a>
                                </div>
                            </dev>
                            <div className='pitch-me-div'>
                                <Typography className='pitch-me' sx={{ fontSize: 22 }} gutterBottom>
                                    Pitch Us
                                </Typography>
                                <p className='p-tag'>
                                    hello,<br/><br/>
                                    my name is <b className='b-tag'>your name</b> and my e-mail address is<br/> <b className='b-tag'>your email</b> and I would like to discuss about <b className='b-tag'>this project</b>.
                                </p>
                                <Button href="mailto:arnab.gupta.ar7@gmail.com" >Mail Now</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </>
    );
}


export default ContactUs;