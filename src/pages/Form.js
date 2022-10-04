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


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


  const categories = [
    {
      value: 'HSE Policy',
      label: 'HSE Policy',
    },
    {
      value: 'HSE Procedures',
      label: 'HSE Procedures',
    },
    {
      value: "SOP's Electrical",
      label: "SOP's Electrical",
    },
    {
      value: "SOP's Mechanical",
      label: "SOP's Mechanical",
    },
    {
      value: "SOP's Operation",
      label: "SOP's Operation",
    },
    {
      value: "SOP's Instrumentation",
      label: "SOP's Instrumentation",
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
  // input: {
  //   display: 'none',
  // },

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
    backgroundColor: "#00004d",
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
  const [title, setTitle] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [revison, setRevision] = useState("");
  const [category, setCatogory] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [uploadFile, setUploadFile] = React.useState(null);
  const [documentUri , setDocumentUri] = React.useState("");
  const [statusCode , setStatusCode] = React.useState(null);

  const classes = useStyles();
 


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  const handleCategoryChange = (event) => {
    setCatogory(event.target.value);
  };


  const onFileChangeHandler = (event) => {
    setUploadFile(event.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    // console.log("Hello");
    e.preventDefault();
    console.log(documentUri);
    console.log(typeof(documentUri));
    const serial = parseInt(serialNumber);
    const revision_int = parseInt(revison)
    var yourDate = selectedDate
    var yourDate1 = yourDate.toISOString().split('T')[0]
    console.log(yourDate1);
    axios
      .post("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/documents" , {
        serial_no : serial,
        title : title,
        revision: revision_int,
        date_of_upload: yourDate1,
        category: category,
        document_url: documentUri
      })
      .then((res) => {
        console.log(res.status);
        setStatusCode(res.status);


      }
      )
      .catch((error) => {
        console.log(error);
        setStatusCode(error);
      });
  }

  const onFileUploadHandler = () => {
    const formData = new FormData();
    
      // Update the formData object
      formData.append('file', uploadFile);

      // Details of the uploaded file
      console.log(uploadFile);
    
      // Request made to the backend api
      // Send formData object
      // see structure of response check whether it is in response.data.
      axios
        .post("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/upload/", formData)
        .then((res) => {
          console.log(res);
          const data = res.data.uuid;
          console.log(data);
          setDocumentUri(data);
          
        })
        .catch((error) => {
          console.log(error)
          
        })
        
  }

  //parse datatypes


  //Submit Handler
 


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
                  setTitle(event.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Serial Number"
                variant="outlined"
                type="text"
                className={classes.field}
                onChange={(event) => {
                  setSerialNumber(event.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Revision"
                variant="outlined"
                type="text"
                className={classes.field}
                onChange={(event) => {
                  setRevision(event.target.value);
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
                onChange={onFileChangeHandler}
            />
           
                <Button variant="contained"  component="span" className={classes.btnstyle} onClick={onFileUploadHandler}>
                Upload PDF
                </Button>
            
        
            <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                fullWidth
                onClick={onSubmitHandler}
                >
                Submit 
            </Button>
            {
              statusCode ?
              statusCode  === 201 ? <Alert severity='success'>Submitted Successfully</Alert> : <Alert severity='error'>Fail</Alert>
              : null
            }
            </div>
          </div>
        </Grid>
      </div>

  );
};

export default Form;
