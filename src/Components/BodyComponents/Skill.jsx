import React from 'react'
import { Box,  Container, Grid } from "@material-ui/core";
import { RenderSectionHeading } from "../Common/CommonComponent";
import { useStyles } from "./BodyStyles";
import Cpp from '../../images/C++.png'
import html from '../../images/html.png'
import css from '../../images/css.avif'
import js from '../../images/js.png'
import react from  '../../images/react.png'
import node from '../../images/node.jpg'
import mongo from '../../images/mongo.png'
import firebase from '../../images/firebase.png'
import postman from '../../images/postman.png'
import vscode from '../../images/vscode.png'
import github from '../../images/github.png'
import csbox from '../../images/csbox.png'
import ScrollAnimation from "react-animate-on-scroll";


function Skill() {
	const classes = useStyles();






    // var classtest='classes.bar';
    // classtest+='classes.front';
    // classtest+='classes.expert';
    const pskillData = [
		{ url: Cpp , title: "Cpp",},
		{ url: html,title: "Cpp",},
		{ url: css,title: "Cpp",},
		{ url: js,title: "Cpp", },
		{ url: react, title: "#  ",},
		{ url: node, title: "#  ", },
		{ url: mongo, title: "#  ", },
		{ url: firebase, title: "#  ", },
	  ];
    const tskillData = [
		{ url: vscode , title: "Cpp",},
		{ url: github,title: "Cpp",},
		{ url: postman,title: "Cpp",},
		{ url: csbox,title: "Cpp", },
	  ];
    const npskillData = [
		{  title: "Leadership",},
		{ title: "Communication skill",},
		{title: "English proficiency",},
		{ title: "Creative Writing", },
	  ];
	return (
		<Box className={classes.sectionDark} id='Skill'>
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
				  smallText: "Skills",
				  heading: "Let's See My Skills",
				  alignCenter: true,
				})}
			  </Grid>
			</Grid>
			{/* image section  */}
	
            <span className={classes.sklhd1}>Professional</span > <span className={classes.sklhd2}>SkillSet</span>
            <br/>
            <br/>
            <br/>
			<Container maxWidth='xl'>
			  <Grid container spacing={2} style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
			  }}>
              {pskillData.map((item, i) => (
				  <Grid item xs={6} sm={1} lg={4} key={i}  >
					<Box className={classes.imageContainer} >
					  <img 
						src={item.url}
						alt={item.title}
						className={classes.responsiveImg}
					  />					 
					</Box>
				  </Grid>
				))}
			  </Grid>
			</Container>
                        <br/>
            <br/>
            <br/>
            <span className={classes.sklhd1}>Tools </span > <span className={classes.sklhd2}>I Use</span>
            <br/>
            <br/>
			<Container maxWidth='xl'>
			  <Grid container spacing={2} style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
			  }}>
              {tskillData.map((item, i) => (
				  <Grid item xs={6} sm={1} lg={4} key={i} >
					<Box className={classes.imageContainer}>
					  <img
						src={item.url}
						alt={item.title}
						className={classes.responsiveImg}
					  />					 
					</Box>
				  </Grid>
				))}
			  </Grid>
			</Container>
            <br/>
            <br/>
            <br/>
            <span className={classes.sklhd1}>Non-Technical</span > <span className={classes.sklhd2}>SkillSet</span>
            <br/>
            <br/>
            <br/>
			<Container >
			  {/* <Grid container spacing={2} 
			  style={{
				display:"flex",
				justifyContent: "center",
				alignContent: "center",
			  }}
			  > */}
              {npskillData.map((item, i) => (
				//   <Grid item xs={6} sm={1} lg={4} key={i}>
					<Box className={classes.imageContainer} style={{
				display:"flex",
				justifyContent: "center",
				alignContent: "center",
			  }} >
                    <div  style={{borderRadius:"15px",fontSize:"20px"}}className={`${classes.bar} ${classes.front} ${classes.expert}`} data-skill={item.title}></div>
                    {/* <div  style={{borderRadius:"15px"}}className={classes.bar} data-skill={item.title}></div> */}
					</Box>
				//   </Grid>
				))}
			  {/* </Grid> */}
			</Container>

		  </ScrollAnimation>
		</Box>
	  );
}
export default Skill






