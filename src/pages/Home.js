import React, { useState, useContext } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Form from "./Form";
import Category from "./Category";
import Search from "./Serach";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    backgroundColor: "white",
    minHeight: "100%",
  },

  extra: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    margin: theme.spacing(0, 0),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 2),
    },
  },
  paperStyle: {
    padding: 10,
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      width: 100,
    },
  },
  heading: {
   
    fontSize: "50px",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
  
    fontFamily: "Quicksand, sans-serif",
      fontWeight: "900",
      fontSize: "40px",
      color: "#4d4d33",
      letterSpacing: ".02em",
    },
  field: {
    color: "#eeb7ba",
    margin: theme.spacing(1, 2),
    width: "300px",
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  },

  btnstyle: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "700",
    backgroundColor: "#A8A19B",
    color: "#fff",
    margin: theme.spacing(1, 2),
    width: "300px",
    height: 50,
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
    borderRadius: "50px",
    textTransform: "none"
  },
  leftmaxwidth:{
    maxWidth: "90%",
    minWidth: "35%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "55%",
      minWidth: "55%",
    },
  },
  rightmaxwidth:{
    maxWidth: "90%",
    minWidth: "35%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "35%",
      minWidth: "35%",
    },
  },
  measureHeight:{
    margin: theme.spacing(24, 4),
    [theme.breakpoints.down("md")]: {
      
      display: "none",
    },
  },
  measureWeight:{
    margin: theme.spacing(8, 32),
    [theme.breakpoints.down("md")]: {
      
      display: "none",
    },
  }
}));


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.BackgroundHead}>
      <div className={classes.extra}>
        <div className={classes.leftmaxwidth}>
          <Search/>
          <Divider variant="middle" className={classes.measureWeight} />
          <Category />
        </div>
        <Divider orientation="vertical" flexItem variant="middle"  className={classes.measureHeight}/>
        <div className={classes.rightmaxwidth}>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Home;