
import React, { useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PriorityHighSharpIcon from '@mui/icons-material/PriorityHighSharp';
import WarningAmberSharpIcon from '@mui/icons-material/WarningAmberSharp';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from "@material-ui/core";
import { color } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const useStyles = makeStyles((theme) => ({
 
    background:{
        backgroundColor: "#e6e6ff",
        height: "40px",
        borderRadius: "13px",
        padding: theme.spacing(1, 2),
        margin: theme.spacing(0, 0,6, 0),
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "900",
    },

    paperStyle: {
      padding: 1,
      [theme.breakpoints.up("md")]: {
  
        padding: theme.spacing(1, 1,2,1),
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        textAlign: "left",
        flexGrow: 1,
        flexWrap: "wrap",
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "400",
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
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "900",
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
      backgroundColor: "#00004d",
      color: "#fff",
      margin: theme.spacing(1, 10),
      width: "30%",
      height: 40,
      [theme.breakpoints.up("md")]: {
        width: "30%",
        // margin: theme.spacing(1, 10),
      },
      borderRadius: "15px",
      textTransform: "none"
    },
  
    border:{
  
      boxShadow: "0px 7px 7px -3px   #B3A9A2",
      margin: theme.spacing(0.5, 0.5),
      borderRadius: "10px",
      position: "center",
      [theme.breakpoints.up("md")]: {
          borderRadius: "30px",
         
        },
      
    },
    icon:{
      width: "30px",
      margin: theme.spacing(0, 1),
    },
    iconCalendar:{
      width: "25px",
      height: "20px",
      margin: theme.spacing(0, 1),
    },
    divider:{
      margin: theme.spacing(0, 16,0,0),
    },
    due:{
      fontWeight: "600",
    },
    date: {
      margin: theme.spacing(1, 1,1,4),
    },
    iconPerson: {
      width:"30px",
      margin: theme.spacing(0,0.8)

    }
    
  }));
  

  // const card = (
  //   <React.Fragment>
  //     {/* <CardContent> */}
  //      <div style={{backgroundColor: "black"}}>
  //       hiii
  //      </div>
  //     {/* </CardContent> */}
  //     <CardActions>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </React.Fragment>
  // );

  
  

export default function BigCard(props) {

    const classes = useStyles();

    

  return (
    <div className={classes.border}>
    <Box sx={{ minWidth: 400 }}>
      <Card variant="outlined" style={{borderRadius: "15px" , minHeight: "700px"}}>

      <div className={classes.background}>
        {props.status }
       </div>

       {props.data && props.data.map((text, index) =>
        <div key={index}>
          <div className={classes.paperStyle}>
              <Brightness1OutlinedIcon className={classes.icon}/>
              <div>
                  {text.name}
                  {/* {props.data[0].priority} */}
              </div>
          </div>

        <Divider className={classes.divider} />
        
          
            <div className={classes.paperStyle}>
              <CalendarTodayOutlinedIcon className={classes.iconCalendar}/>
              <div className={classes.due}>
                Due on
              </div>
              <div  className={classes.date}>
                {text.due_date}
              </div>
            </div>
            {props.status === "Overdue" ? <div className={classes.paperStyle}>
              {text.escalated == true ? 
                <div className={classes.paperStyle}>
              <WarningAmberSharpIcon className={classes.iconCalendar} style={{color:"red"}}/>
              <div className={classes.due}>
                Escalated
              </div>
              </div> : null}
            </div> : 
            <div className={classes.paperStyle}>
              <Button variant="contained" className={classes.btnstyle} size="small" onClick={() => props.handler(text)}  >
              {props.status == 'pending' ? "Completed" : "Pending"}
              </Button>

            </div>}
      
        </div>
        
      ) }
      

       {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}

      </Card>
    </Box>
    </div>
  );
}
