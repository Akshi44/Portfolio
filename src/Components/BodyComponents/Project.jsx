import React from 'react'
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { RenderSectionHeading } from "../Common/CommonComponent";
import { useStyles } from "./BodyStyles";
import clock from '../../images/clock.JPG'
import Arovol from '../../images/Arovol.JPG'
import restaurant from '../../images/restaurant.JPG'
import sport from '../../images/sport.JPG'
import calculator from '../../images/calculator.JPG'
import dancemy from '../../images/Dancemy.JPG'
import { Link } from 'react-router-dom';
import ScrollAnimation from "react-animate-on-scroll";

function Project() {
	const classes = useStyles();
	const projectData = [
		{ url: Arovol, title: "Arovol", link: "https://github.com/Akshi44/Arovol",disc:"An interactive platform that empowered users to login and sign up functionality on Arovol, enabling registered users to share both technical and non-technical queries. The system recorded all question and response details, including when and by whom they were posted. A subsequent user may respond to that inquiry."  },
		{ url: restaurant, title: "Online Restaurant", link: "https://github.com/Akshi44/Online-Restaurant",disc:"This project is built on an online meal ordering platform featuring sections for signing up, signing in, about, food menu, and ordering." },
		{ url: sport, title: "IIITB Sport Club  ", link: "https://akshi44.github.io/IIIT-BHOPAL-SPORTS-CLUB/" ,disc:" IIIT bhopal sports club based website, having login, sign-up page along with all past sports events." },
		{ url: clock, title: "Digital Clock  ", link: "https://github.com/Akshi44/Time-Clock" ,disc:"A digital clock with a digital display of the time and date. It also includes an element to indicate whether the time is AM or PM. " },
		{ url: calculator, title: "Calculator  ", link: "https://akshi44.github.io/Calculator/" ,disc:"This calculator performs arithmetic operations on numbers. That includes addition, subtraction, multiplication ,division and many more mathematical calculations. " },
		{ url: dancemy, title: "Dancemy", link: "https://github.com/Akshi44/Dancemy" ,disc:"This is a project for a dance academy that offers dancing instruction spaces." },
	  ];
	return (
		<Box className={classes.sectionDark} id='Project'>
		  <ScrollAnimation animateIn='fadeIn'>
			<Grid
			  container
			  style={{
				displa: "flex",
				justifyContent: "center",
				alignContent: "center",
			  }}>
			  <Grid item xs={12} sm={8}>
				{RenderSectionHeading({
				  smallText: "Projects",
				  heading: "Let's See My Work",
				  alignCenter: true,
				})}
			  </Grid>
			</Grid>
			{/* imge section  */}
	
			<Container maxWidth='xl'>
			  <Grid container spacing={2} >
				{projectData.map((item, i) => (
				  <Grid item xs={6} sm={6} lg={4} key={i}  >
					<Box className={classes.imageContainer}>
					  <img
						src={item.url}
						alt={item.title}
						className={classes.responsiveImg}
					  />
					  <Box className={classes.imageOverlay}>
						<Typography className={classes.overlayTitle} >
						  {item.title}
						</Typography>
						{item.disc}
						<br/>
						<br/>
						<Button  variant='contained'><Link className={classes.plnk} to={item.link} >Visit</Link></Button>
					  </Box>
					</Box>
				  </Grid>
				))}
			  </Grid>
			</Container>
		  </ScrollAnimation>
		</Box>
	  );
}

export default Project
