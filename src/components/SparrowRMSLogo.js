import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import { makeStyles} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    background:{
      height: "12%",
      width: "auto",
      // padding: theme.spacing(1, 2),
      // margin: theme.spacing(4),
      position: "absolute",
      top: 0,
      right: 7
    },

    div:{
      margin: theme.spacing(8),
    }
})) 


export default function SparrowRMSLogo() {
  const classes = useStyles();
  return (
    <div className={classes.div}>
 <img src="./sparrowrmslogo.png" alt ="SparrowRMS logo" className={classes.background}></img>
    </div>
   
  );
}
