  import 'date-fns';
  import React, { useState, useContext, useEffect } from "react";
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
      margin: theme.spacing(1 , 4),
      borderRadius: "30px"
    }
  },
  paperStyle:{
    padding: 1,
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      padding: theme.spacing(1, 1),
   
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
    
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 1,
    // margin: theme.spacing(0, 0),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      // margin: theme.spacing(-9, 5),
    },
    paddingTop: 10
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
      width: "30%",
      height: 50,
    },
    borderRadius: "20px",
    textTransform: "none"
  },


}))




const MocChangeRequest = (props) =>{

  const classes = useStyles();
  let location = useLocation();

  console.log(location);
  let text = location.state?.value;
  let newRequest = location.state?.newTask;
  let viewRequest = location.state?.view;
  console.log(newRequest);
  console.log(text);

  const [category , setCategory] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [priority , setPriority] = React.useState("");
  const [dueDate , setDueDate] = React.useState(null);
  const [projectTitle , setProjectTitle] = React.useState("");
  const [department , setDepartment] = React.useState("");
  const [area , setArea] = React.useState("");
  const [itemToChange , setItemToChange] = React.useState("");
  const [changeDescription , setChangeDescription] = React.useState("");
  const [timeline , setTimeline] = React.useState("");
  const [expectedCost , setExpectedCost] = React.useState("");
  const [statusCode , setStatusCode] = React.useState(null);
  const [crn , setCrn] = React.useState(1);
  // setCategory(text ? text.category : category);


  useEffect(() => {

    setCategory(text ? text.category : category);
    setPriority(text ? text.priority : priority);
    setProjectTitle(text ? text.project_name : projectTitle);
    setDepartment(text? text.department : department);
    setArea(text ? text.area : area);
    setItemToChange(text ? text.item_to_be_changed : itemToChange);
    setChangeDescription(text? text.change_description: changeDescription)
    setTimeline(text? text.l1_predicted_timeline : timeline );
    setExpectedCost(text ? text.l1_estimated_costs : expectedCost);
    setCrn(text? text.crn : crn);

    
   
  } , [text])


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

  const onSubmitHandler = async (e) => {

    e.preventDefault();
    const predictTimeline = parseInt(timeline);
    const cost = parseInt(expectedCost);

    axios
        .post("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/moc/l1_draft" , {

          project_name: projectTitle,
          area: area,
          department: department,
          category: category,
          priority: priority,
          item_to_be_changed: itemToChange,
          change_description: changeDescription,
          l1_name: "L1",
          l1_contact: "7869785432",
          l1_predicted_timeline: predictTimeline,
          l1_estimated_costs: cost,
          status: "L1_Draft"

        })
        .then((response) => {
          console.log(response);
          setStatusCode(response.status);

        })
        .catch((error) => {
          console.log(error);
          setStatusCode(error);
        })
  }

  const onSaveHandler = () => {

    console.log();
    const predictTimeline = parseInt(timeline);
    const cost = parseInt(expectedCost);
    axios
      .put(`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/moc/l1_draft/${crn}` , {
          project_name: projectTitle,
          area: area,
          department: department,
          category: category,
          priority: priority,
          item_to_be_changed: itemToChange,
          change_description: changeDescription,
          l1_name: "L1",
          l1_contact: "7869785432",
          l1_predicted_timeline: predictTimeline,
          l1_estimated_costs: cost,
          status: "L1_Draft",
          crn: crn
      })
      .then((res) => {
        console.log(res);

      }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {

    const getData = async () => {

      await axios.get("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/moc/count")
                 .then((res) => {
                  console.log(res);
                  setCrn(newRequest ? res.data.count + 1 : text.crn) ;
                 })
                 .catch((error) => {
                  console.log(error);
                 })
    }

    getData();
  } , [newRequest])

  return (

    <Box
        component="main"
        sx={{ flexGrow: 1, ml: `calc(10% + ${drawerWidth}px)`, width: { sm: `calc(80% - ${drawerWidth}px)`} }}
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
                value={projectTitle}
                className={classes.field}
                onChange={(event) =>{
                  setProjectTitle(event.target.value);
                }}
                InputProps={{
                  readOnly: viewRequest? true: false,
                }}
      
              />
        <TextField
                id="outlined-read-only-input"
                label="Change Request Number"
                // defaultValue={crn}
                value={crn}
                variant="outlined"
                className={classes.field}
                InputProps={{
                  readOnly: true,
                }}
              />
        <TextField
                id='outlined-basic'
                label="Department"
                variant='outlined'
                value={department}
                type='text'
                className={classes.field}
                onChange= {(event) => {
                  setDepartment(event.target.value);
                }}
                InputProps={{
                  readOnly: viewRequest? true: false,
                }}

        />
        <TextField
            id='outlined-basic'
            label="Area"
            variant='outlined'
            type='text'
            value={area}
            className={classes.field}
            onChange = {(event) => {
              setArea(event.target.value);
            }}
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
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
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
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
            />

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
            value={itemToChange}
            className={classes.field}
            onChange={(event) => {
              setItemToChange(event.target.value);
            }}
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
        />
        <TextField
            id='outlined-basic'
            label="Change description"
            variant='outlined'
            type='text'
            value={changeDescription}
            className={classes.field}
            onChange={(event) => {
              setChangeDescription(event.target.value);
            }}
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
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
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
>
           {Priorities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
           ))}
           
           </TextField>

           <TextField
            id='outlined-basic'
            label="Expected Timeline in Months"
            variant='outlined'
            type='text'
            value={timeline}
            className={classes.field}
            onChange={(event) => {
              setTimeline(event.target.value);
            }}
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
            />
        <TextField
            id='outlined-basic'
            label="Expected Cost in Cr"
            variant='outlined'
            type='text'
            value={expectedCost}
            className={classes.field}
            onChange={(event)=> {
              setExpectedCost(event.target.value);
            }}
            InputProps={{
              readOnly: viewRequest? true: false,
            }}
            />

            <div>
            {
              viewRequest? null : 
              <div >
                <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                onClick={ newRequest ? onSubmitHandler : onSaveHandler }
                
                >
                Save
            </Button>
            <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                onClick={ newRequest ? onSubmitHandler : onSaveHandler }
                
                >
                Submit 
            </Button>
            {
              statusCode ?
              statusCode  === 201 ? <Alert severity='success'>Submitted Successfully</Alert> : <Alert severity='error'>Fail</Alert>
              : null
            }
              </div> 
            }
            </div>
           
            
        
        

            
          
        </div>

        </div>
      </Grid>
    </div>
    </Box>
  )
}

export default MocChangeRequest;