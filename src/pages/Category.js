import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
 

  extra: {
    display: "flex",
    alignItems: "center",
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
    padding: 2,
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      padding: 20
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
    backgroundColor: "#8080ff",
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
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(1, 6),
        borderRadius: "30px",
      },
    
  }
  
}));


const categories = [
    {
      value: 'category1',
      label: 'Category1',
    },
    {
      value: 'category2',
      label: 'Category2',
    },
    {
      value: 'category3',
      label: 'Category3',
    },
    {
      value: 'category4',
      label: 'Category4',
    },
  ];

const Category = (props) => {
  
  const classes = useStyles();
  return (


    <div className={classes.border}>
        <div className={classes.paperStyle}>
            <h4 className={classes.heading}>Categories</h4>
            <div className={classes.extra}>
                {categories.map((name) => (
                    <Button
                    variant="contained"
                    className={classes.btnstyle}
                    // onClick={handleLogin}
                >
                   {name.label}
                </Button>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Category;
