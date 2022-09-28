import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from "@material-ui/core/styles";

import {
  Chart, SeriesTemplate, CommonSeriesSettings, Title,
} from 'devextreme-react/chart';


const data = [
    { age: 'Low', number: 5900000 },
    { age: 'Medium', number: 38250000 },
    { age: 'Important', number: 52820000 },
    { age: 'Urgent', number: 38420000 }
]

const useStyles = makeStyles((theme) => ({
   
    background:{
        backgroundColor: "#e6e6ff",
        height: "40px",
        borderRadius: "13px",
        padding: theme.spacing(1, 2),
        margin: theme.spacing(0, 0,0, 0)

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
  
      boxShadow: "0px 7px 7px -3px   #B3A9A2",
      margin: theme.spacing(0.5, 0.5),
      borderRadius: "10px",
      position: "center",
      [theme.breakpoints.up("md")]: {
          margin: theme.spacing(1, 6),
          padding: theme.spacing(-4 , -4),
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

    },
    date: {
      margin: theme.spacing(1, 1,1,4),
    },
    iconPerson: {
      width:"30px",
      margin: theme.spacing(0,0.8)

    }
    
  }));

const BarChartCard = () =>  {

    const classes = useStyles();

    return (
        <Card variant="outlined" style={{borderRadius: "15px"}}>
  
        <div className={classes.background}>
        Complicancy Status
         </div>
      <Chart
        id="chart"
        palette="Soft"
        width= {400}
        dataSource={data}>
        <CommonSeriesSettings
          argumentField="age"
          valueField="number"
          type="bar"
          ignoreEmptyPoints={true}
        />
        <SeriesTemplate nameField="age" />
        
      </Chart>
      </Card>
    
    );
  }



export default BarChartCard;