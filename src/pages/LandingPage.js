import * as React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const drawerWidth = 239;


const useStyles = makeStyles((theme) => ({
    image:{
        height:70,
        width:238,
        marginTop:'139%'
      },
    user:{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',

    }
}));




export default function LandingPage(props) {

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
   

    return (
        <Box 
        component="main"
        sx= {{flexGrow: 1 , ml: `${drawerWidth}px` , width: {sm: `calc(100% - ${drawerWidth}px)`}}}
        >
        <div>
        <div className={classes.user}>
            <div><PersonOutlinedIcon/></div>
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label" style={{
            height:25,
            padding:0
        }}>User</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        //   style = {{
        //     height:30
        //   }}
        //   InputLabelProps={{
        //     style: {
        //         height:25
//             },
//   }}
        >
          
          <MenuItem value={"L1"} >L1</MenuItem>
          <MenuItem value={"L2"}>L2</MenuItem>

        </Select>
        <FormHelperText>Select User</FormHelperText>
      </FormControl>
            </div>
        </div>
        <img src = "./landingPage.png" 
            width="99%"
            height="100%"
        />
      </div>

        </Box>
    )
}

