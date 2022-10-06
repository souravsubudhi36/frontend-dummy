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
import { ClassNames } from '@emotion/react';


const categories = [
  {
    value: 'Hardware',
    label: 'Hardware',
  },
  {
    value: 'Software',
    label: 'Software',
  },
  {
    value: 'Chemical',
    label: 'Chemical',
  },
  {
    value: 'Procedure',
    label: 'Procedure',
  }
]

const Priorities = [
  {
    value: "High",
    label: "High",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Low",
    label: "Low"
  }

]

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
  paperStyle:{
    padding: 1,
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      padding: theme.spacing(6, 1),
   
    },
  },
  heading: {
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    fontFamily: "Quicksand, sans-serif",
      fontWeight: "900",
      fontSize: "40px",
      color: "#4d4d33",
      letterSpacing: ".02em",
  },
  extra: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 1,
    margin: theme.spacing(0, 0),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 10),
    },
    paddingTop: 120
  },
  field: {
    color: "#eeb7ba",
    margin: theme.spacing(1, 2),
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
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




const MocChangeRequest = (props) =>{

  const classes = useStyles();

  const [category , setCategory] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [priority , setPriority] = React.useState("");
  const [dueDate , setDueDate] = React.useState(null);


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  }

  const handleDueDateChange = (date) => {
    setDueDate(date);
  }

  return (

    <Box
        component="main"
        sx={{ flexGrow: 1, ml: `calc(10% + ${drawerWidth}px)`, width: { sm: `calc(80% - ${drawerWidth}px)` } }}
      >
    <div className={classes.border}>
      <Grid>
        <div className={classes.paperStyle}>
        <Grid align="center">
              <h4 className={classes.heading}>Change Request</h4>
        </Grid>
        <div className={classes.extra}>
        <TextField
                id="outlined-basic"
                label="Project Name"
                variant="outlined"
                type="text"
                className={classes.field}
      
              />
        <TextField
                id="outlined-basic"
                label="Change Request Number"
                variant="outlined"
                type="text"
                className={classes.field}
              />
        <TextField
                id='outlined-basic'
                label="Department"
                variant='outlined'
                type='text'
                className={classes.field}
        />
        <TextField
            id='outlined-basic'
            label="Area"
            variant='outlined'
            type='text'
            className={classes.field}
        />

        <TextField 
            id='outlined-select-currency'
            select
            label="Select"
            value={category}
            onChange={handleCategoryChange}
            className= {classes.field}
            helperText= "Please select Category"
            variant='outlined'
>
           {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
           ))}
           
           </TextField>

        <TextField
            id='outlined-read-only-input'
            label="Requester Name"
            defaultValue="Requester"
            variant='outlined'
            className={classes.field}
            InputProps={{
              readOnly: true,
            }}
            ></TextField>

        <TextField 
            id='outlined-read-only-input'
            label="Requester Contact"
            defaultValue="2349875671"
            variant='outlined'
            className={classes.field}
            InputProps={{
              readOnly: true,
            }}
        />
        <TextField
            id='outlined-basic'
            label="Item to be changed"
            variant='outlined'
            type='text'
            className={classes.field}
        />
        <TextField
            id='outlined-basic'
            label="Change description"
            variant='outlined'
            type='text'
            className={classes.field}
            />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            margin='outlined'
            inputVariant='outlined'
            id='date-picker-dialog'
            label="Date"
            format='MM/dd/yyyy'
            value={selectedDate}
            className={classes.field}
            onChange= {handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            />
        </MuiPickersUtilsProvider>

        <TextField 
            id='outlined-select-currency'
            select
            label="Select"
            value={priority}
            onChange={handlePriorityChange}
            className= {classes.field}
            helperText= "Please select Priority"
            variant='outlined'
>
           {Priorities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
           ))}
           
           </TextField>

           <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            margin='outlined'
            inputVariant='outlined'
            id='date-picker-dialog'
            label="Expected Timeline"
            format='MM/dd/yyyy'
            value={dueDate}
            className={classes.field}
            onChange= {handleDueDateChange}
            KeyboardButtonProps={{
              'aria-label': 'select date'
            }}
            />
        </MuiPickersUtilsProvider>

        <TextField
            id='outlined-basic'
            label="Expected Cost"
            variant='outlined'
            type='text'
            className={classes.field}
            />

        <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                
                >
                Submit 
            </Button>
        
        

            
          
        </div>

        </div>
      </Grid>
    </div>
    </Box>
  )
}

export default MocChangeRequest;