import {
	AppBar,
	Box,
	Button,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
  } from "@material-ui/core";
  import React from "react";
  import { useStyles } from "./HeaderStyles";
  import icon from "../../images/icon.jpg"
  import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
  import { Link } from "react-scroll";
  import { Theme } from "../Theme";
  
  export default function Navbar({navlinks,handleDrawerToogler}) {
//   export default function Navbar({handleDrawerToogler}) {
	const classes = useStyles();
    // const navlinks=[
	// 	{label:"Home",Id:"Home"},
	// 	{label:"About",Id:"About"},
	// 	{label:"Project",Id:"Project"},
	// 	{label:"Skill",Id:"Skill"},
	// 	{label:"Contact",Id:"COntact"}
	//    ];
	return (
	  <AppBar position='fixed' className={classes.navbar}>
		<Toolbar
		  className={classes.ToolBar}
		  style={{ backgroundColor: Theme.colors.base1 }}>
		  <Typography variant='h5' component='h6'>
			<img  src={icon} alt="logo" style={{height:'50px',width:'50px',borderRadius:'50%',marginLeft:"80px",marginTop:'8px'}}/>
		  </Typography>
  
		  {/* navlinks  */}
		  <Box component={Hidden} xsDown>
			<Box>
			  {navlinks.map((item, i) => (
				<Button
				  key={i}
				  className={classes.navlinks}
				  to={`${item.Id}`}
				  activeClass='active'
				  spy={true}
				  smooth={true}
				  offset={-70}
				  duration={500}
				  component={Link}
				  color='inherit'>
				  {item.label} 
				</Button>
			  ))}
			</Box>
		  </Box>
		  <Box component={Hidden} smUp>
			{/* <IconButton color='inherit' onClick={handleDrawerToogler}> */}
			<IconButton color='inherit' onClick={handleDrawerToogler}>
			  <MenuRoundedIcon/>
			</IconButton>
		  </Box>
		</Toolbar>
	  </AppBar>
	);
  }