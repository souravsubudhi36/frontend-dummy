import React, { useState, useContext } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Form from "./Form";
import Category from "./Category";
import Search from "./Serach";
import Box from '@mui/material/Box';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
  } from "@material-ui/core";
  import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


const drawerWidth = 240; 

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

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    backgroundColor: "white",
    minHeight: "100%",
    // marginLeft: `calc(15% + ${drawerWidth}px)`
  },

  extra: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    margin: theme.spacing(0, 0),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 2),
    },
  },
  paperStyle: {
    padding: 10,
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      
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
      width: "90%",
    },
  },

  btnstyle: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "700",
    backgroundColor: "#8080ff",
    color: "#fff",
    margin: theme.spacing(1, 2),
    width: "300px",
    height: 50,
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
    textTransform: "none"
  },
  leftmaxwidth:{
    maxWidth: "90%",
    minWidth: "35%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "55%",
      minWidth: "55%",
    },
  },
  rightmaxwidth:{
    maxWidth: "90%",
    minWidth: "35%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "35%",
      minWidth: "35%",
    },
  },
  measureHeight:{
    margin: theme.spacing(24, 4),
    [theme.breakpoints.down("md")]: {
      
      display: "none",
    },
  },
  measureWeight:{
    margin: theme.spacing(8, 32),
    [theme.breakpoints.down("md")]: {
      
      display: "none",
    },
  },
  border:{
   
    [theme.breakpoints.up("md")]: {
       
      },
      borderWidth: '1px',
      borderStyle: 'solid'
  },
  input: {
    display: 'none',
  },
  submit: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "700",
    backgroundColor: "#8080ff",
    color: "#fff",
    margin: theme.spacing(0, 0),
    width: "300px",
    height: 50,
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    textTransform: "none"
  },
}));


const Newtask = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

 

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [category, setCatogory] = React.useState('category 1');

  const handleCategoryChange = (event) => {
    setCatogory(event.target.value);
  };

  return (

    <Box
        component="main"
        sx={{ flexGrow: 1, ml: `calc(10% + ${drawerWidth}px)`, width: { sm: `calc(70% - ${drawerWidth}px)` } }}
      >
    <div className={classes.BackgroundHead}>
      <div className={classes.extra}>
       
      <div className={classes.border}>
        <Grid>
          <div className={classes.paperStyle}>
            <Grid align="center">
              <h4 className={classes.heading}>Add Documents</h4>
            </Grid>
            <div className={classes.extra1}>
              <TextField
                id="outlined-basic"
                label="Document Title"
                variant="outlined"
                type="text"
                className={classes.field}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            <TextField
                id="outlined-select-currency"
                select
                label="Assign To"
                value={category}
                onChange={handleCategoryChange}
                className={classes.field}
                helperText="Drop down from users"
                variant="outlined"
                >
                {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="Priority"
                value={category}
                onChange={handleCategoryChange}
                className={classes.field}
                helperText="Please select your priority"
                variant="outlined"
                >
                {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                margin="outlined"
                inputVariant="outlined"
                id="date-picker-dialog"
                label="Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                className={classes.field}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
            <input
                accept="application/pdf"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained"  component="span" className={classes.btnstyle}>
               Attach 
                </Button>
            </label>

            <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                fullWidth
                >
               Upload
            </Button>
            </div>
          </div>

          <Button
            type="submit"
            variant="contained"
            className={classes.submit}
            fullWidth
            >
            Submit
            </Button>
        </Grid>
      </div>
    
      </div>
    </div>
    </Box>
  );
};

export default Newtask;
