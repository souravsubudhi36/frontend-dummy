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
import Modal from "../components/Modal";
import BasicCard from "../components/DataCard";


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
    backgroundColor: "#00004d",
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
      value: 'HSE Policy',
      label: 'HSE Policy',
    },
    {
      value: 'HSE Procedures',
      label: 'HSE Procedures',
    },
    {
      value: "SOP's Electrical",
      label: "SOP's Electrical",
    },
    {
      value: "SOP's Mechanical",
      label: "SOP's Mechanical",
    },
    {
      value: "SOP's Operation",
      label: "SOP's Operation",
    },
    {
      value: "SOP's Instrumentation",
      label: "SOP's Instrumentation",
    },
  ];

const Category = (props) => {
  
  const classes = useStyles();
  const [categoryData , setCategoryData] = React.useState(
    []
  );
  const [modalShown, toggleModal] = React.useState(false);
  

  const handleSubmit = (data) => {
    console.log(data);
    axios({
      method: "GET",
      url: `http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/documents`,
      headers: {  "Content-Type": "application/json"},
      params: {
        "category" : data
      }
    })
      .then((response) => {
        console.log(response)
        console.log(response.data)
        setCategoryData( [...response.data] )
        console.log(categoryData.users)
      })
      toggleModal(!modalShown);

    

  }


  

  return (

    <div className={classes.border}>
        <div className={classes.paperStyle}>
            <h4 className={classes.heading}>Categories</h4>
            <div className={classes.extra}>
                {categories.map(( name) => (
                    <Button
                    variant="contained"
                    className={classes.btnstyle}
                    onClick= {() => {
                      handleSubmit(name.label);
                    }}
                >
                   {name.label}
                </Button>
                ))}
                
                {/* <BasicModal open = {open}/> */}
                <Modal
                  shown={modalShown}
                  close = {() => {
                    toggleModal(false);
                  }
                  }
                  >
                    
                 {categoryData.map(( name) => (

                    <BasicCard serial_no =  {name.serial_no} title = {name.title} revision = {name.revision} category = {name.category} document_url = {name.document_url} />
                  
             
                ))}
                    <h1>Hello</h1>
                  </Modal>
            </div>
        </div>
    </div>
  );
};

export default Category;
