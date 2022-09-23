
import React, { useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const useStyles = makeStyles((theme) => ({
 

    extra: {
      display: "flex",
      alignItems: "top",
      justifyContent: "center",
      textAlign: "center",
      flexGrow: 1,
      flexWrap: "wrap",
    },
    footer: {
      backgroundColor: "#001a66",
      color: "white",
      textAlign: "center",
      height: "50px",
    },
    paperStyle: {
      padding: 1,
      [theme.breakpoints.up("md")]: {
        fontSize: "30px",
        padding: 10,
        display: "flex",
        alignItems: "top",
        justifyContent: "left",
        textAlign: "left",
        flexGrow: 1,
        flexWrap: "wrap",
      },
    },
    heading: {
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
      },
      fontFamily: "Quicksand, sans-serif",
        fontWeight: "900",
        fontSize: "28px",
        color: "#4d4d33",
        letterSpacing: ".02em",
      },
    field: {
      color: "#eeb7ba",
      margin: theme.spacing(1, 2),
      width: "100px",
      [theme.breakpoints.up("md")]: {
        width: "350px",
      },
    },
  
    btnstyle: {
      fontFamily: "Quicksand, sans-serif",
      fontWeight: "700",
      backgroundColor: "#B3A9A2",
      color: "#fff",
      margin: theme.spacing(1, 1),
      width: "40%",
      height: 55,
      [theme.breakpoints.up("md")]: {
        width: "20%",
        margin: theme.spacing(2, 2),
      },
      borderRadius: "15px",
      textTransform: "none"
    },
  
    border:{
  
      boxShadow: "0px 0px 25px  #B3A9A2",
      margin: theme.spacing(0.5, 0.5),
      borderRadius: "10px",
      position: "center",
      [theme.breakpoints.up("md")]: {
          margin: theme.spacing(1, 6),
          borderRadius: "30px",
          width: "80%",
        },
      
    },
    search: {
      position: 'relative',
      borderRadius: "10px",
      backgroundColor: "#e6e6ff",
      '&:hover': {
        backgroundColor: "#fff",
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(4,2),
        width: '100%',
        height : "50px"
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      display : "flex"
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 0, 0),
      paddingLeft: theme.spacing(4),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    
  }));
  

const card = (
  <React.Fragment>
  <div>
    <CardContent>
      
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </div>
  </React.Fragment>
);

export default function OutlinedCard() {

    const classes = useStyles();
  return (
    <div className={classes.border}>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </div>
  );
}
