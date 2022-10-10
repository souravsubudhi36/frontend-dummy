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
import { useLocation } from 'react-router-dom';


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
      field: {
        color: "#eeb7ba",
        margin: theme.spacing(1, 2),
        width: "90%",
        [theme.breakpoints.up("md")]: {
          width: "90%",
        },
      },
      btnstyle: {
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "700",
        backgroundColor: "#00004d",
        color: "#fff",
        margin: theme.spacing(1, 2),
        width: "90%",
        height: 40,
        [theme.breakpoints.up("md")]: {
          width: "40%",
          height: 50,
        },
        borderRadius: "20px",
        textTransform: "none"
      },

}))



const ImpactAssessment = (props) => {

    const classes = useStyles();
    let location = useLocation();

    console.log(location);
    let text = location.state?.value;
    console.log(text);


    return (
        <Box
            component="main"
            sx={{flexGrow: 1 , ml: `calc(10% + ${drawerWidth}px)` , width: { sm: `calc(80% - ${drawerWidth}px)`}}}
            >
            <Grid align="center">
                            <h3 className={classes.heading}>Case For Change</h3>
                         </Grid>
                <div className={classes.border}>
                    <Grid>
                    
                    <div className={classes.paperStyle}>
                        
                    </div>
                    </Grid>
                    <Grid>
                        <div className={classes.paperStyle}>
                            <Grid align="center">
                                <div className={classes.extra}>
                                    <Grid container spacing={4}>
                                        <Grid item xs = {12} md = {4}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            variant="outlined"
                                            defaultValue="Proposed Change"
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {8}>
                                        <TextField
                                            id='outlined-basic'
                                            label="Enter Details"
                                            variant='outlined'
                                            type='text'
                                            className={classes.field}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {4}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            variant="outlined"
                                            defaultValue="Why Change is Required"
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {8}>
                                        <TextField
                                            id='outlined-basic'
                                            label="Enter Details"
                                            variant='outlined'
                                            type='text'
                                            className={classes.field}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {4}>
                                            <TextField
                                            id="outlined-read-only-input"
                                            variant="outlined"
                                            defaultValue="Intended Outcome"
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {8}>
                                        <TextField
                                            id='outlined-basic'
                                            label="Enter Details"
                                            variant='outlined'
                                            type='text'
                                            className={classes.field}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {4}>
                                            <TextField
                                            id="outlined-read-only-input"
                                            variant="outlined"
                                            defaultValue="Estimated Time frames"
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {8}>
                                        <TextField
                                            id='outlined-basic'
                                            label="In Months"
                                            variant='outlined'
                                            type='text'
                                            className={classes.field}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {4}>
                                            <TextField
                                            id="outlined-read-only-input"
                                            variant="outlined"
                                            defaultValue="Additional Factors"
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {8}>
                                        <TextField
                                            id='outlined-basic'
                                            label="Enter Details"
                                            variant='outlined'
                                            type='text'
                                            className={classes.field}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {4}>
                                            <TextField
                                            id="outlined-read-only-input"
                                            variant="outlined"
                                            defaultValue="Estimated Costs"
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs = {12} md = {8}>
                                        <TextField
                                            id='outlined-basic'
                                            label="In Cr."
                                            variant='outlined'
                                            type='text'
                                            className={classes.field}
                                        />
                                        </Grid>

                                    </Grid>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={classes.btnstyle}
                                        
                                        >
                                        Approve
                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={classes.btnstyle}
                                        
                                        >
                                        Reject 
                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={classes.btnstyle}
                                        
                                        >
                                        Save 
                                    </Button>

                                </div>
                            </Grid>
                        </div>

                    </Grid>

                </div>

            </Box>
    )
}

export default ImpactAssessment;