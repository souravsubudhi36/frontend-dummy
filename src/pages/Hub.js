import * as React from 'react';
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


const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

function IconRendering(index)
{
  if (index == 0)
  {
    return <AnalyticsIcon/>;
    
  }
  else if(index == 1)
  {
    return <CreateNewFolderIcon/>;
    
  }
  else
  {
    return <AccountCircleIcon/>
  }
}

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

const pending_data = [
  {
    currentStatus: 'pending',
    date : '22.09.2022',
    name: 'Naveen',
  },
  {
    currentStatus: 'pending',
    date : '22.09.2022',
    name: 'Naveen',
  },
  
];

const completed_data = [
  {
    currentStatus: 'pending',
    date : '22.09.2022',
    name: 'Naveen',
  },
  {
    currentStatus: 'pending',
    date : '22.09.2022',
    name: 'Naveen',
  },
  
];

const late_data = [
  {
    currentStatus: 'pending',
    date : '22.09.2022',
    name: 'Naveen',
  },
  {
    currentStatus: 'pending',
    date : '22.09.2022',
    name: 'Naveen',
  },
  
];



export default function Hub(props) {
 

  const classes = useStyles();

  return (
      <Box
        component="main"
        sx={{ flexGrow: 1, ml: `${drawerWidth}px`, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Grid container spacing={4} >
          <Grid item xs = {12} md = {4} >
            <BigCard data={pending_data} />

          </Grid>
          <Grid item xs = {12} md = {4}>
            <BigCard data={completed_data}/>
          </Grid>

          <Grid item xs = {12} md = {4}>
            <BigCard data={late_data}/>
          </Grid>


        </Grid>
      </Box>
  );
}
