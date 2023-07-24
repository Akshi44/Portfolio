import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/about3.png";
import { RenderSectionHeading, CardMedia } from "../Common/CommonComponent";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ComputerIcon from '@material-ui/icons/Computer';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import nullclass from '../../images/nullclass.png'
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
	{
	  title: " Web Developer",
	  icon: <DashboardIcon />,
	},
	{
	  title: "Competitive Programmer",
	  icon: <ComputerIcon />,
	},
	{
	  title: "Graphic Designer",
	  icon: <ToysIcon />,
	},
	{
	  title: "Creative writer",
	  icon: <MenuBookIcon />,
	}, 
  
  ];
  return (
	<Box className={classes.section} id='About'>
	  <ScrollAnimation animateIn='fadeIn'>
		<Container >
		  <Grid container spacing={1}>
			<Grid item sm={5}>
			  <Box component={Hidden} xsDown>
				<img
				  src={image}
				  alt=' about us'
				  className={classes.responsiveImg}
				//   style={{height:"80%"}}
				/>
			  </Box>
			</Grid>
			<Grid item xs={12} sm={7} style={{fontSize:"20px"}}>
			  {RenderSectionHeading({
				smallText: "ABOUT ME",
				heading: "Hello I'm Akshita Agrawal",
				description:
				  "At IIIT Bhopal, I'm currently studying for a B.Tech. with a Computer Science concentration. The technology industry fascinates me, and I'm now working on creating new breakthroughs. I'm an aspiring web developer as well as a competitive programmer.I am adept at listening and communicating to exchange people's viewpoints, and I am constantly willing to adopt innovative concepts while maintaining a positive mentality."
				  
			  })}
			  <br />
			  {/* {CardMedia({
			  label: "labae1",
			  Desc: "Desc1",
			  Icon: <AcUnitIcon />,
			})} */}
			  <Grid container style={{flexDirection:"column"}}>
				{cardMediaData.map((item, i) => (
				  <Grid item xs={12} sm={6} key={i}>
					{CardMedia({
					  label: item.title,
					  Desc: item.description,
					  Icon: item.icon,
					})}
				  </Grid>
				))}
			  </Grid>
		<br/>
		<br/>
		<br/>
			  <a  href="https://docs.google.com/document/d/1p0FruIwl0NhHk9V5fPUT2C-Kl-DRDgtQiY1dP0YGvSw/edit" className={classes.resume}>Download Resume</a>
			</Grid>
		  </Grid>
		<div style={{color:"white"}} class={classes.timeline}>
			<div class={classes.timeline__line}></div>         
			<ul class={classes.timeline__items}>
				<li class={classes.timeline__item}>
					<div style={{marginLeft:"3.5rem",fontFamily:"cursive"}} class={classes.timeline_main__title}>
						<h1 className={classes.education}>Education</h1>
						<hr class="border border-danger border-2 opacity-100"/>

					</div>                  
					<div class={classes.timeline__top}>
						<div style={{borderRadius:"50%"}} class={classes.timeline__circle}></div>                        
						<div style={{ marginLeft: "1rem"}} class={classes.timeline__title}>
							<h2>B.Tech.(2021-2025)</h2>
						</div>
					</div>
	
					<div style={{margin: "3.5rem"  ,marginTop:"35px"}} class={classes.timeline__desc}>
						<h>Indian Institute of Information Technology, Bhopal<br/>Computer &amp; Science Engineering (CSE)</h>
					</div>
				</li>              
			</ul>
			<div class={classes.timeline__line}></div>
			<ul class={classes.timeline__items}>
				<li class={classes.timeline__item}>
					<div class={classes.timeline__top}>
						<div style={{borderRadius:"50%"}}class={classes.timeline__circle}></div>
						<div class={classes.timeline__title}>
							<h2>HSC (2018-2019)</h2>
						</div>
					</div>
					<div style={{margin: "3.5rem" ,marginTop:"35px" }}  class={classes.timeline__desc}>
						<h>NVM Senior Secondary School, Jaipur, Rajasthan<br/></h>
					</div>
				</li>
			</ul>
			<div class={classes.timeline__line}></div>
		
			<ul class={classes.timeline__items}>
				<li class={classes.timeline__item}>
					<div class={classes.timeline__top}>
						<div style={{borderRadius:"50%"}} class={classes.timeline__circle}></div>
		
						<div class={classes.timeline__title}>
							<h2>SSC (2016-2017) </h2>
						</div>
					</div>
		
					<div style={{margin: "3.5rem" ,marginTop:"35px"}}  class={classes.timeline__desc}>
						<h>NVM Senior Secondary School, Jaipur, Rajasthan<br/></h>
						
					</div>
				</li>       
				</ul>            
		</div>
		<h1  style={{fontFamily:"cursive"}} className={classes.experience}>Experience</h1>
		<hr style={{width:"900px"}} className="border border-danger border-2 opacity-100"/>
		<div className={classes.exp} style={{color:"white",display:"flex",border:"1px solid white",width:"50%",marginLeft:"25%",boxShadow:" 0px 36px 26px 0px rgba(0, 0, 0, 0.8)"}} v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 hover:scale-110 hover:duration-500 hover:ease-in-out"><div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between"><div class="flex flex-row justify-between"><div class=""><h3 class="font-semibold text-lg leading-tight truncate">Fullstack Developer</h3><p className="font-semibold text-[0.9rem] pt-1 leading-tight truncate">NullClass (Internship)</p></div><div className=""><img className="h-[50px] w-[50px]" style={{height:"30px",width:"30px",border:"1px solid white"}} src={nullclass} alt="NullClass" srcset=""/></div></div><p className="mt-2"> For the modules, I created client- and server-side frontend and backend code. and Designed and maintained website components to make them more user-friendly and easy to browse. and built-in database searches for routines that used MongoDB on the backend server.
</p><p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-2">May 2023 - july 2023</p></div>
		
</div>
		</Container>
	  </ScrollAnimation> 
	</Box>
  );
}





// progress 
