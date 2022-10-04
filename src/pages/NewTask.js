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
import axios from "axios";


const drawerWidth = 240; 

const users = [
    {
      value: 'Sourav@example.com',
      label: 'Sourav',
    },
    {
      value: 'Prathmesh@example.com',
      label: 'Prathmesh',
    },
    {
      value: 'Rajwardhan@example.com',
      label: 'Rajwardhan',
    },
    {
      value: 'Shubham@example.com',
      label: 'Shubham',
    },
  ];


  const priority_data = [
    {
      value: 'Low',
      label: 'Low',
    },
    {
      value: 'Medium',
      label: 'Medium',
    },
    {
      value: 'Important',
      label: 'Important',
    },
    {
      value: 'Urgent',
      label: 'Urgent',
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
    backgroundColor: "#00004d",
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
  // input: {
  //   display: 'none',
  // },
  submit: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "700",
    backgroundColor: "#53B262",
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

  const [title, setTitle] = useState("");
  const [user, setUser] = React.useState('');
 

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const onFileChangeHandler = (event) => {
    setUploadFile(event.target.files[0]);
  };

  const onPriorityHandler = (event) => {
    setPriority(event.target.value);
  }

  

  const [priority , setPriority] = React.useState('')
  const [uploadFile, setUploadFile] = React.useState(null);
  const [documentUri , setDocumentUri] = React.useState("");



  const onFileUploadHandler = () => {
    const formData = new FormData();


    formData.append('file' , uploadFile);
    console.log(uploadFile);

    axios
      .post("http://iosapi.centralindia.cloudapp.azure.com/upload/", formData)
      .then((response) => {
        console.log(response);
        const data = response.data.uuid;
        console.log(data);
        setDocumentUri(data);
      })
  }

  const onSubmitHandler = async (e) => {

    e.preventDefault();
    console.log(documentUri);
   
    console.log(title);
    console.log(user);
    console.log(priority);
   
    var yourDate = selectedDate;
    var yourDateStr = yourDate.toISOString().split('T')[0]
    console.log(yourDateStr);
    console.log(typeof(documentUri));
    console.log(typeof(title));
    console.log(typeof(user));
    console.log(typeof(priority));
    console.log(typeof(yourDateStr))
    axios
      .post("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/tasks" , {
        name : title,
        assigned_to : user,
        priority : priority,
        due_date : yourDateStr,
        document_url : documentUri

      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


  }
  

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
              <h4 className={classes.heading}>New Plan</h4>
            </Grid>
            <div className={classes.extra1}>
              <TextField
                id="outlined-basic"
                label="Document Title"
                variant="outlined"
                type="text"
                className={classes.field}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            <TextField
                id="outlined-select-currency"
                select
                label="Assign To"
                value={user}
                onChange={handleUserChange}
                className={classes.field}
                helperText="Drop down from users"
                variant="outlined"
                >
                {users.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="Priority"
                value={priority}
                onChange={onPriorityHandler}
                className={classes.field}
                helperText="Please select your priority"
                variant="outlined"
                >
                {priority_data.map((option) => (
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
                onChange={onFileChangeHandler}
            />
            {/* <label htmlFor="contained-button-file">
                <Button variant="contained"  component="span" className={classes.btnstyle}>
               Attach 
                </Button>
            </label> */}
           

            <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                fullWidth
                onClick={onFileUploadHandler}
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
            onClick={ onSubmitHandler }
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
