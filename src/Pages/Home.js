import React from 'react';
import DisplayLottie from '../Components/DisplayLottie';
import '../Static/Css/Home.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import AnimatedText from 'react-animated-text-content';
import "react-awesome-button/dist/styles.css";
import CEO from '../Static/Images/CEO.jpg';
import Footer from '../Components/Footer';



function Home() {

    return(
        <>
            <div className='animated-text'>
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={1.0}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    Welcome to DEVEER
                </AnimatedText>
            </div>
            <Box className='grid-box' sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid  className='grid-1' item xs={6}>
                            <h2 className='h3'>Hello <span className='sp1'>All</span><span>,</span></h2>
                            <p className='p-tag'><span className='sp1'>DEV</span><span className='sp2'>EER</span> is a web developing based startup, coming soon.<br/>
                                We have a dream to provide the best service at a<br/> cheap price
                                to our Customers.<br/>
                                <br/>
                                You have a plan to launch your own website?<br/>
                                We are here to help you.
                            </p>
                        </Grid>
                        <Grid item xs={6}>
                            <DisplayLottie animationPath='./Lottie/developer1.json' width='70%' height='70%' />
                        </Grid>
                </Grid>
            </Box>
            <div>
                <svg width="100%" height="15%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#f17d2dff"></stop><stop offset="95%" stop-color="#a59489ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 125.53571428571428,195.39285714285714 251.07142857142856,190.78571428571428 375,196 C 498.92857142857144,201.21428571428572 621.25,216.24999999999997 742,206 C 862.75,195.75000000000003 981.9285714285716,160.21428571428572 1098,155 C 1214.0714285714284,149.78571428571428 1327.0357142857142,174.89285714285714 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>
            <div className='projects'>
                <h2 className='h2'>Some Demo Projects</h2>
                <Box className='grid-card' sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid  className='grid-1' item xs={6}>
                            <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            GamintTournamentOrganizing
                                        </Typography>
                                        <Typography className='body' variant="body2" color="text.secondary">
                                            It's a platform where you can host a tournament, play a tournament, earn money from tournaments. Demo Link Provided.
                                            <br/>
                                        </Typography>   
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href='https://github.com/dev-ar7/GamintTournamentOrganizing-Django-React'>Github</Button>
                                        <Button size="small" href='https://dev-ar7.github.io/PiratesE-sports/'>Demo</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                            <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Online Shoping
                                        </Typography>
                                        <Typography className='body' variant="body2" color="text.secondary">
                                            It's a onine shoping platform where users can register, login, browse items and buy items of their choices.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href='https://github.com/dev-ar7/Shop-Django-React'>Github</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                    </Grid>
                </Box>
                <Box className='grid-card' sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid  className='grid-1' item xs={6}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Resturents
                                        </Typography>
                                        <Typography className='body' variant="body2" color="text.secondary">
                                            It's a platform where you can add, view all resturents details, resturents menu and more.
                                        </Typography>   
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href='https://github.com/dev-ar7/Resturents-Django-React'>Github</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Portfolio
                                        </Typography>
                                        <Typography className='body' variant="body2" color="text.secondary">
                                            I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js. It's not a responsive site, I developed it for PC only.Portfolio Demo Link Provided.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href='https://github.com/dev-ar7/Portfolo-Django-React'>Github</Button>
                                        <Button size="small" href='https://dev-ar7.github.io/portfolio/'>Demo</Button>
                                    </CardActions>
                                </Card>
                            </Grid> 
                    </Grid>
                </Box>
                <div>
                    <svg width="100%" height="15%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#a59489ff"></stop><stop offset="95%" stop-color="#f17d2dff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 299,222.5 598,245 838,245 C 1078,245 1259,222.5 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
                </div>
            </div>
            <div className='company-details'>
                <h2 className='h2'>Our Members</h2>
                <Box className='grid-card' sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid  className='grid-1' item xs={6}>
                            <Card sx={{ display: 'flex' }}>
                                <Box className='card-box' sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            Arnab Gupta
                                        </Typography>
                                        <Typography className='subtitle' variant="subtitle1" component="div">
                                            Founder and CEO of <span className='sp1'>DEV</span><span className='sp2'>EER</span>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton className='icon-btn' aria-label="github"
                                            href='https://github.com/dev-ar7'
                                        >
                                            <FiGithub/>
                                        </IconButton>
                                        <IconButton className='icon-btn' aria-label="instagram"
                                            href='https://www.instagram.com/ar7_.srt/'
                                        >
                                            <FaInstagram/>
                                        </IconButton>
                                        <IconButton className='icon-btn' aria-label="linkedin"
                                            href='https://www.linkedin.com/in/arnab-gupta-516765221/'
                                        >
                                            <FaLinkedinIn/>
                                        </IconButton>
                                        <IconButton className='icon-btn' aria-label="twitter"
                                            href='https://twitter.com/PHYM17?t=BHYzNfVA8zQj_Jqfl6b5Gg&s=03'
                                        >
                                            <FaTwitter/>
                                        </IconButton>
                                    </Box>
                                </Box>
                                <CardMedia
                                    className='card-img'
                                    component="img"
                                    sx={{ width: 175 }}
                                    image={CEO}
                                    alt="CEO of DEVEER"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            
                        </Grid> 
                    </Grid>
                </Box>
                <div>
                    <svg width="100%" height="15%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#a59489"></stop><stop offset="95%" stop-color="#f17d2d"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}


export default Home;