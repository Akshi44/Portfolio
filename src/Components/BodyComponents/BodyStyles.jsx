import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
	section: {
		backgroundColor: Theme.colors.base1,
		padding: theme.spacing(10, 0, 8, 0),
	},
	sectionDark: {
		backgroundColor: Theme.colors.primary1,
		padding: theme.spacing(10, 0, 8, 0),
	},
	

	//common
	divider: {
		width: "64px",
		height: "4px",
		backgroundColor: Theme.colors.primary,
	},
	sectionDesc:{
 		fontSize:"20px"
	},
resume:{
			textDecoration:"none",
			color:"white",
			border:"2px solid white",
			padding:"4px",
			fontWeight:"bolder",
			"&:hover": {
				color:Theme.colors.primary1,
				backgroundColor: "white",
			}
},
education:{
	color:Theme.colors.base2,
},
timeline:{
	position:"relative",
	margin: "8rem",
	color:Theme.colors.base1
},
timeline__line:{
		borderRight: "2px solid white",
		left: "16px",
		position: "absolute",
		top: "0px",
		height: "100%",
},
timeline__items:{
	listStyleType: "none",
	margin: "0px",
	padding: "0px",
	marginBottom:"-50px"
},
timeline__item:{
	marginBottom: "8px",
},
'li':{
	display: "list-item",
	textAlign: "-webkit-match-parent",
},
timeline_main__title:{
	fontSize: '1.4rem',
	BorderBottom: "3px solid white",
},
timeline__top:{
	alignItems: "center",
	display: "flex",
},
timeline__circle:{
		backgroundColor: Theme.colors.base2,
		height: "30px",
		width: "30px"
},
timeline__title:{
		flex: "1",
		fontSize: "1rem",
		marginBottom:"-60px",

},
timeline__desc:{
	fontSize: "1.2rem",
	marginBottom:"-30px",
},
experience:{
	color:Theme.colors.base2

},
exp:{
	 '&:hover':{
		 backgroundColor:Theme.colors.primary1,
		 border:"5px solid white",
		 transition:"all 1s ease-in-out",
	 }
},
	responsiveImg: {
		width: "100%",
		height: "auto",
	},
	sectionHeadingCont: {
		padding: theme.spacing(3),
		color: Theme.colors.base2,

	},
	sectionHeading: {
		color: Theme.colors.base2,
		margin: theme.spacing(1, 0),
	},

	AvatarCont: {
		display: "flex",
		flexFlow: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: {
		backgroundColor: Theme.colors.primary,
		color: Theme.colors.base2,
	},
	MediaText: {
		color: Theme.colors.base2,
	},

	// # portfolio section
	imageContainer: {
		position: "relative",
		"&:hover $imageOverlay": {
			opacity: 1,
		},
	},
	imageOverlay: {
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		backgroundColor: Theme.colors.primary,
		color: Theme.colors.base2,
		display: "flex",
		flexFlow: "column wrap",
		justifyContent: "center",
		alignItems: "center",
		opacity: 0,
		transition: "0.7s",
	},
	overlayTitle: {
		fontSize: "2rem",
		marginBottom: "16px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.2rem",
		},
	},
	plnk:{
		textDecoration:"none",
		color:"black",
	},
	sklhd1:{
		color:"white",
		fontSize:"30px",
	},
	sklhd2:{
		color:Theme.colors.primary,
		fontSize:"30px",

	},
	bar:{
		backgroundColor: Theme.colors.primary,
		padding: '2px',
		margin: '1rem',
		fontSize: '1.5rem',
		color: 'white',
		fontWeight: 'bold',
		textDecoration: '1px 1px 1px rgba(0,0,0,0.5)',
		expert:{
			'&::before':{
	
				width: 'calc(90% - 10px)',
			}
		},
		front:{
			'&::before':{
				backgroundColor: Theme.colors.primary,
			}
		},
		'&::before':{
			content: 'attr(data-skill)',
			display: 'inline-block',
			padding: '5px 0 5px 10px',
			border: 'inherit',
			width:"300px"
			// -webkit-animation: 'load 1s 0s',
		},
	},
	ci:{
		color:"white",
		padding:"0px 15px ",
		'&:hover':{
			color:"skyblue",
		}
	},
	//form com=ntainer
	formContainer: {
		padding: theme.spacing(2),
		margin: theme.spacing(2, 0),
	},

	submitBtn: {
		backgroundColor: Theme.colors.primary,
		color: Theme.colors.base2,
		"&:hover": {
			backgroundColor: Theme.colors.primary1,
		},
	},

	// footer stylr
	footerContainer: {
		backgroundColor: Theme.colors.primary1,
		color: Theme.colors.base2,
		padding: theme.spacing(2),
		position: "relative",
	},
	iconButton: {
		position: "absolute",
		right: 5,
		top: -25,
		backgroundColor: Theme.colors.primary,
		color: Theme.colors.base2,
	},
}));