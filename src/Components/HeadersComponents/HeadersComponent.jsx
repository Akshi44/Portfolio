import React, { useState } from 'react'
import { Box ,Typography} from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import { Decorator } from '../Common/CommonComponent';
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from './DrawerComponent';
import profile from '../../images/profile pic.jpeg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'

function HeadersComponent() {
		const classes = useStyles(); 

		const [initialState, setInitialState] = useState(false);
		const handleDrawerToogler = () => {
		  setInitialState(initialState);
		};
		
		  const navlinks=[
			{label:"Home",Id:"Home"},
			{label:"About",Id:"About"},
			{label:"Project",Id:"Project"},
			{label:"Skill",Id:"Skill"},
			{label:"Contact",Id:"Contact"}
		   ];  

	return ( 
		<Box className={classes.HeardeWraper} id='Home'> 
		<Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
		
		<DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />
				<Box className={classes.Headercontaier}>
						 <Typography varinat='h3' component='h4' className={classes.headerTitle}>
									 <h5 style={{marginBottom:'-1px'}}>Hello !<br/> I'm Akshita Agrawal</h5> 
										<span style={{ paddingRight: "5px" ,fontSize:"40px",color:"#0097a7"}}>▶</span>
										<Typed
											strings={["competitive programmer"," Webdeveloper", " Graphic Designer","Creative Writer"]}
											typeSpeed={30}
											backSpeed={50}
											loop
										/> 
										
						 </Typography>
						 <Typography varinat='h3' component='h5' className={classes.headerDesc}>
					<Link className={classes.ci} to={'https://github.com/Akshi44'}><GitHubIcon/></Link>
					<Link className={classes.ci} to={'https://www.linkedin.com/in/akshita-agrawal-847411232/'}><LinkedInIcon/></Link>
					<Link className={classes.ci} to={'https://twitter.com/Akshita_44'}><TwitterIcon/></Link>
					<Link className={classes.ci} to={'https://www.instagram.com/akshita_1043/'}><InstagramIcon/></Link>
				</Typography>
				{Decorator({
					label: "About Me",
					withIcon: true,
					Icon: <ArrowDownwardRoundedIcon />,
				})}
				</Box>
				<img src={profile} alt="profile" style={{width:'20rem',height:'20rem',borderRadius:'50%',marginTop: '-50px'}} />
		</Box>
	) 
}

export default HeadersComponent
