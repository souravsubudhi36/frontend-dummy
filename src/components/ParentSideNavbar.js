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
import TaskSharpIcon from '@mui/icons-material/TaskSharp';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ApprovalIcon from '@mui/icons-material/Approval';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

const drawerWidth = 239;

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
    return <TaskSharpIcon/>;
    
  }
  else 
  {
    return <AnalyticsIcon/>;
    
  }

}

function hubIconRendering(index)
{
  if (index == 0)
  {
    return <AnalyticsIcon/>;
    
  }
  else if(index == 2)
  {
    return <CreateNewFolderIcon/>;
    
  }
  else
  {
    return <AccountCircleIcon/>
  }
}

function mocIconRendering(index)
{
  if (index == 0)
  {
    return <ChangeCircleIcon/>
  }
  else
  {
    return <ApprovalIcon/>
  }

}

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 1,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 0,0,0),
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
  image:{
    height:70,
    width:238,
    marginTop:'68%'
  }
})) 

//features in the side bar
const menu = [
    {
        name: 'Document Repository',
        route: 'home'
    },
    
    
  ];


const hubMenu = [
    {
        name: 'Hub',
        route: 'analytics'
    },
    {
        name: 'Assigned To Me',
        route: 'hub'

    },
    {
        name: 'NewTask',
        route: 'newtask'
    }
]

const mocMenu = [

    {
      name: "Change Request",
      route: "ChangeRequest"
    },
    {
      name: "Impact Assessment",
      route: "ImpactAssessment"
    }
]

export default function ParentSideNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        
      <List  >
      <ListItemButton style= {{color: "white"}} component="a" href='/'>
      <ListItemIcon style={{color: "white"}}>
      <HomeOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon style={{color: "white"}}>
        <AnalyticsIcon/>
        </ListItemIcon>
        <ListItemText primary="H&S Data" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {
            hubMenu.map((text , index) => (
          <ListItemButton style={{color: "white"}} component="a" href={`/${text.route}`} sx={{ pl: 4 }}>
            <ListItemIcon style={{color: "white"}}>
              {hubIconRendering(index)}
            </ListItemIcon>
            <ListItemText primary={text.name} style= {{color: "white"}} />
          </ListItemButton>
        ))}
        </List>
      </Collapse>
        {menu.map((text, index) => (
    
         
            <ListItemButton style= {{color: "white"}} component="a" href={`/${text.route}`}>
            <ListItemIcon style={{color: "white"}}>
              {IconRendering(index)}
              </ListItemIcon>
              <ListItemText primary={text.name} style= {{color: "white"}} />

            </ListItemButton>
           
     
        ))}

      <ListItemButton onClick={handleClick}>
        <ListItemIcon style={{color: "white"}}>
        <ManageHistoryIcon/>
        </ListItemIcon>
        <ListItemText primary="MOC" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {
            mocMenu.map((text , index) => (
          <ListItemButton style={{color: "white"}} component="a" href={`/${text.route}`} sx={{ pl: 4 }}>
            <ListItemIcon style={{color: "white"}}>
              {mocIconRendering(index)}
            </ListItemIcon>
            <ListItemText primary={text.name} style= {{color: "white"}} />
          </ListItemButton>
        ))}
        </List>
        </Collapse>
        <ListItemButton style= {{color: "white"}} component="a" href='/'>
        <ListItemIcon style={{color: "white"}}>
        <SchoolOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="Training & Learning" />
        </ListItemButton>
        <ListItemButton style= {{color: "white"}} component="a" href='/'>
        <ListItemIcon style={{color: "white"}}>
        <TrackChangesOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="Audit & Inspection" />
        </ListItemButton>
        <ListItemButton style= {{color: "white"}} component="a" href='/'>
        <ListItemIcon style={{color: "white"}}>
        <WorkspacePremiumOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="Permit To Work" />
        </ListItemButton>
        <ListItemButton style= {{color: "white"}} component="a" href='/'>
        <ListItemIcon style={{color: "white"}}>
        <AddModeratorOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="CAPA" />
        </ListItemButton>
        <ListItemButton style= {{color: "white"}} component="a" href='/'>
        <ListItemIcon style={{color: "white"}}>
        <PersonSearchOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="CAPA" />
        </ListItemButton>

      
      </List>
     
      <Divider />
      {/* <div>
        <img src = "./modifiedIosLogo.png" className={classes.image}/>
      </div> */}
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  

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
            backgroundColor: "white",
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
          }}
          open
        >
          {drawer}

          
        </Drawer>
      </Box>
     

 
    </Box>
    
  );
}
