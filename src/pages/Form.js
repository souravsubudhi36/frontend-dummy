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


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


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
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "70%",
    padding: theme.spacing(4, 4),
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  input: {
    display: 'none',
  },

  extra: {
    display: "flex",
    alignItems: "center",
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
  footer: {
    backgroundColor: "#001a66",
    color: "white",
    textAlign: "center",
    height: "50px",
  },
  paperStyle: {
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
  field: {
    color: "#eeb7ba",
    margin: theme.spacing(1, 2),
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "88%",
    },
  },

  btnstyle: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "700",
    backgroundColor: "#8080ff",
    color: "#fff",
    margin: theme.spacing(1, 2),
    width: "90%",
    height: 40,
    [theme.breakpoints.up("md")]: {
      width: "90%",
      height: 50,
    },
    borderRadius: "20px",
    textTransform: "none"
  },
  border:{
    boxShadow: "0px 0px 10px  #B3A9A2",
    margin: theme.spacing(0.5, 0.5),
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(1, 6),
        borderRadius: "30px",
      },
    
  }
  
}));
const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const classes = useStyles();
 

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [category, setCatogory] = React.useState('category 1');

  const handleCategoryChange = (event) => {
    setCatogory(event.target.value);
  };


  return (
  
     
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
                id="outlined-basic"
                label="Serial Number"
                variant="outlined"
                type="text"
                className={classes.field}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Revision"
                variant="outlined"
                type="text"
                className={classes.field}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                margin="outlined"
                inputVariant="outlined"
                id="date-picker-dialog"
                label="Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                className={classes.field}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>


            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={category}
                onChange={handleCategoryChange}
                className={classes.field}
                helperText="Please select your category"
                variant="outlined"
                >
                {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <input
                accept="application/pdf"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained"  component="span" className={classes.btnstyle}>
                Upload PDF
                </Button>
            </label>

            <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                fullWidth
                >
                Submit
            </Button>
            </div>
          </div>
        </Grid>
      </div>

  );
};

export default Form;
