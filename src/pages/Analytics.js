import * as React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import { useState , useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OutlinedCard from './Card';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/system';
import PieChartCard from '../components/PieChartCard';
import BarChartCard from '../components/BarChartCard';
import DiscreteSliderLabel  from '../components/Slider';
import BigCard from '../components/BigCard';
import axios from 'axios';


const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }


const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 1,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 1,2,1),
      display: "grid",
      alignItems: "center",
      justifyContent: "left",
      textAlign: "left",
      flexGrow: 1,
      flexWrap: "wrap",
    },
  },
  color:{
    background: "#000066"
  },
  border:{
    
    // boxShadow: "0px 7px 7px -3px   #B3A9A2",
    margin: theme.spacing(0.5, 0.5),
    borderRadius: "10px",
    position: "center",
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(1, 6),
        // padding: theme.spacing(-4 , -4),
        borderRadius: "30px",
     
       
      },
    
  },
})) 

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "pink",
          color: "red",
        }
      }
    }
  }
});



export default function Analytics(props) {
 

  const classes = useStyles();
  const [statusData , setStatusData] = React.useState([]);
  const [priorityData , setPriorityData] = React.useState([]);
  const [userData , setUserData] = React.useState([]);
  const [pendingData , setPendingData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleAddStatus = ([...data]) => {
    setStatusData((statusData) => [
        ...statusData,
        {
           arguement : "Random Friend Name",
            value: 20, // Random age
        },
    ]);
};

  useEffect(() => {

    const getData = async () => {
        await axios.get("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/hub")
        .then((response) => {
            console.log(response.data);
            console.log(response.data.priority);
            setStatusData([...response.data.status]);
            // handleAddStatus(response.data.status);
            setPriorityData([...response.data.priority]);
            setUserData([...response.data.user]);
            statusData.map((entry) => {

            })
        })
        .catch((error) => {
            console.log(error);
        })
    };

    getData();
  } , [refresh]);

  useEffect(() => {

    const getPendingData = async () => {
      await axios.get("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/sourav.k%40sparrowrms.in/tasks")
      .then((response) => {
        setPendingData([...response.data.pending]);
      })
      .catch((error) => {
        console.log(error);
      })
    };

    getPendingData();
    console.log(pendingData);
  } , [refresh]);

  const modifyStatusHandler = (data) => {

    console.log(data);
    axios
      .put(`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/tasks/${data.serial_no}` , {
        serial_no: data.serial_no,
        name: data.name,
        assigned_to: "sourav.k@sparrowrms.in",
        priority: data.priority,
        status: "Completed",
        due_date: data.due_date,
        document_url: data.document_url
      })
      .then((res) => {
        console.log(res);
        
        setRefresh(!refresh)

      }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  
  

  return (
    <div className={classes.border}>
<Box
        component="main"
        sx={{ flexGrow: 1, ml: `${drawerWidth}px`, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        sm={{flexGrow: 1, ml: "0px", width: { sm: "100%" }}}
      >


<Grid container spacing={4}>

          <Grid item xs ={12} sm ={8}>
            <Grid container direction="column" spacing={4} >
              <Grid item xs ={12} sm ={8}>
                <Grid container direction="row" spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <PieChartCard data = { statusData }/>
                    {/* { priorityData && priorityData[0].status} */}
                  </Grid>
                  <Grid item xs = {12} sm = {6} >
                      <BarChartCard data = { priorityData }/>
                  </Grid>
                </Grid>
              </Grid>
                
              <Grid item xs = {12} sm = {8} >
                <DiscreteSliderLabel data = {userData}/>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs = {12} sm = {4} spacing={4}>
            <BigCard data = {pendingData} status = "Pending" action = "Completed" handler= {modifyStatusHandler}/>
          </Grid>
         
        </Grid>
      </Box>
    </div>
      
  );
}
