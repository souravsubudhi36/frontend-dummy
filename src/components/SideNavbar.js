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
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/system';
import Link from '@mui/material/Link';


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

const data = [
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

const menu = [
    {
        name: 'HUB',
        route: 'hub'
    },
    {
        name: 'New Task',
        route: 'newtask'
    },
    {
        name: 'Assigned',
        route: 'assigned'
    },
    
  ];


export default function SideNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        
      <List  >
        {menu.map((text, index) => (
    
          <ListItem key={text.name}  component="a" href={`/${text.route}`} >
            <ListItemButton style= {{color: "white"}}>
              {IconRendering(index)}
              <ListItemText primary={text.name} style= {{color: "white"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const classes = useStyles();

  return (
    <Box sx={{ display: 'flex' }}   >
      <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "black", display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          PaperProps={{
            sx: {
              backgroundColor: "#00004d",
              color: 'white'
           
            }
          }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              backgroundColor: "#00004d",
              color: 'white'
           
            }
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            backgroundColor: "blue",
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Grid container spacing={2}>


          {
            data.map((item) => (
              <Grid item xs={12} md={6}>

                  <OutlinedCard
                    status = {item.currentStatus}
                    date = {item.date}
                    name = {item.name}
                  />
              </Grid>
            ))
          }
        </Grid>
      </Box> */}
     

 
    </Box>
    
  );
}
