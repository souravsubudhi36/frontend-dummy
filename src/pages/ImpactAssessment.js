import 'date-fns';
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
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import SuccessAlert from '../components/Alert/SuccessAlert';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';



const drawerWidth = 240

const useStyles = makeStyles((theme) => ({

    border:{
        boxShadow: "0px 0px 10px  #B3A9A2",
        margin: theme.spacing(0.5 , 0.5),
        borderRadius: "10px",
        [theme.breakpoints.up("md")]: {
          margin: theme.spacing(1 , 6),
          borderRadius: "30px"
        }
      },

}))



const ImpactAssessment = (props) => {

    const classes = useStyles()

    return (
        <Box
            component="main"
            sx={{flexGrow: 1 , ml: `calc(10% + ${drawerWidth}px)` , width: { sm: `calc(80% - ${drawerWidth}px)`}}}
            >
                <div className={classes.border}>
                    <Grid>
                    <div className={classes.paperStyle}>
                         <Grid align="center">
                            <h4 className={classes.heading}>Case For Change</h4>
                         </Grid>
                    </div>
                    </Grid>
                </div>
                
            </Box>
    )
}

export default ImpactAssessment;