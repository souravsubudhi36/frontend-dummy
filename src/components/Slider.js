import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import { makeStyles} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const marks = [
  {
    value: 15,
    label: 'Rajwardhan',
  }
];

const useStyles = makeStyles((theme) => ({
    background:{
        backgroundColor: "#e6e6ff",
        height: "40px",
        borderRadius: "13px",
        padding: theme.spacing(1, 2),
        margin: theme.spacing(0, 0,0, 0),
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "900",
        fontSize: "20px",

    },
  paperStyle: {
    padding: 1,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 1,2,1),
      display: "grid",
      alignItems: "center",
      justifyContent: "left",
      textAlign: "left",
      flexGrow: 1,
      flexWrap: "wrap",
    },
  },
  color:{
    background: "#000066"
  },
  border:{
    
    // boxShadow: "0px 7px 7px -3px   #B3A9A2",
    margin: theme.spacing(0.5, 0.5),
    borderRadius: "10px",
    position: "center",
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(1, 6),
        // padding: theme.spacing(-4 , -4),
        borderRadius: "30px",
     
       
      },
    
  },
  spacing:{
    padding: theme.spacing(2)
  },
  text:{
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "600",
    fontSize: "14px",
  }
})) 




function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderLabel({data}) {
  const classes = useStyles();
  return (
    <Card variant="outlined"  style={{borderRadius: "15px"}} >

        <div className={classes.background}>
          Members
        </div>

         {data.map((text , index) => {
          const arr = [];
          arr.push(text);
          return(
            
          <div key={index} className={classes.spacing}>
          <Slider
              defaultValue={text.count}
              getAriaValueText={valuetext}
              step={1}
               marks={arr}
              valueLabelDisplay="auto"  
              
          />
      <div className={classes.text}>
        {text.assigned_to}
      </div>
      </div>
         )})}
    
      {/* <Slider
      
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="auto"
        className={classes.spacing}
      />
    
       <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="auto"
        className={classes.spacing}
      />

        <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="auto"
        className={classes.spacing}
      /> */}

    </Card>
  );
}
