import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Stack } from "@devexpress/dx-react-chart";
import Grid from '@mui/material/Grid';





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
        // margin: theme.spacing(0, 0,0, 0),
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "900",
        // letterSpacing: ".02em",
        fontSize: "20px",
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
            // padding: theme.spacing(-4 , -4),
            borderRadius: "30px",
            width: "70%"
           
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
  
      },
      spacing:{
        margin: theme.spacing(-12),
        fontFamily: "Quicksand, sans-serif",
      fontWeight: "900",
      
      },
      display:{
        alignItems: "right",
        justifyContent: "center",
        textAlign: "left",
        padding: theme.spacing(1, 2),
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "900",
      },
      count:{
        padding: theme.spacing(0, 0, 0, 2),
        fontWeight: "400",
      }
      
    }));
    
  
    

  
  export default function PieChartCard({data}) {
  
      const classes = useStyles();
    return (
  
        <Card  style={{borderRadius: "15px", maxHeight: "auto"}}>
  
        <div className={classes.background}>
            Status  
            {/* props.status */}
         </div>
          
            
            <Chart
                data={data}
                className={classes.spacing}
            >
            <PieSeries valueField="count" 
              argumentField="status" 
              innerRadius={0.4} 
              outerRadius = {0.5}
            >
              </PieSeries>
            </Chart>
            {data.map((text) =>
            // <div className={classes.display} >

              <Grid container spacing={4} className={classes.display}>
                <Grid item xs={4}> 
                {text.status}
                  </Grid>
                <Grid item xs={4}>  {text.count} </Grid>
                
                {
                  text.status === "Completed" ? <Grid item xs={4} >
                  <img src = "./blue.png"
                    width="25%"></img>
                  </Grid> : 
                 
                    text.status === "Overdue" ? <Grid item xs={4}>
                    <img src = "./orange.png"
                    width="25%"></img>
                    </Grid> : <Grid item xs={4}>
                      <img src = "./green.png"
                      width="25%"></img>
                    </Grid>
                
                }
                
                
              </Grid>
              

      
            
              )}

        </Card>
   

    );
  }
  

