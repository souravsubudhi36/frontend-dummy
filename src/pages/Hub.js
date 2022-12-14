import * as React from 'react';
import { useEffect , useState } from 'react';
import { makeStyles} from "@material-ui/core/styles";
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
import BigCard from '../components/BigCard';
import axios from 'axios';


const drawerWidth = 240;



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
  }
})) 





export default function Hub(props) {
 
  const [task, setTask] = useState(null);  
  const [pendingData , setPendingData] = useState(null);
  const [completedData , setCompletedData] = useState(null);
  const [overdueData , setOverdueData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  

  useEffect(() => {

    const getData = async () => {
      await axios.get("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/sourav.k%40sparrowrms.in/tasks")
      .then((res) => {
        console.log(res.data)
        console.log(res.data.pending)
        setTask(res.data);
        setPendingData([...res.data.pending])
        setCompletedData([...res.data.completed]);
        setOverdueData([...res.data.overdue]);
      })
      .catch((err) => {
        console.log(err);
      });
      
    };  

    getData();
    console.log(pendingData);
  }, [refresh]);

  
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
      <Box
        component="main"
        sx={{ flexGrow: 1, ml: `calc(${drawerWidth}px)`, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Grid container spacing={0} >
          <Grid item xs = {12} md = {4} >
            <BigCard data = {pendingData} status="Pending" action="Completed" handler= {modifyStatusHandler}/>
          </Grid>
          <Grid item xs = {12} md = {4}>
              <BigCard data = { completedData } status = "Completed" action="Pending" handler = {modifyStatusHandler}/>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <BigCard data = { overdueData } status = "Overdue"/>
          </Grid>
        </Grid>
      </Box>
  );
}
