import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link as destination} from "react-scroll";
import { Link} from "react-router-dom";

export default function Footer() {
  const classes = useStyles();
  var date = new Date();
  return (
	<Box className={classes.footerContainer} id='Footer'>
	  <IconButton
		className={classes.iconButton}
		to='Home'
		activeClass='active'
		spy={true}
		smooth={true}
		offset={-70}
		duration={1200}
		component={destination}
		>
		<ArrowUpwardIcon style={{color:"white"}} />
	  </IconButton>
	  <h2>FIND ME ON</h2>
		<h5>Feel free to connect with me</h5>
		<CallIcon/> +91-6378308009
		<br/>
		<EmailIcon/> akshitaagrawal2468@gmail.com
		<br/>
		<br/>
		<Link className={classes.ci} to={'https://github.com/Akshi44'}><GitHubIcon/></Link>
		<Link className={classes.ci} to={'https://www.linkedin.com/in/akshita-agrawal-847411232/'}><LinkedInIcon/></Link>
		<Link className={classes.ci} to={'https://twitter.com/Akshita_44'}><TwitterIcon/></Link>
		<Link className={classes.ci} to={'https://www.instagram.com/akshita_1043/'}><InstagramIcon/></Link>
			<br/>
			<br/>
	  <Typography variant='body1' component='h5' align='center' color='inherit'>
		 All Right Reserved © {date.getFullYear()} || Akshita Agrawal
	  </Typography>
	</Box>
  );
}