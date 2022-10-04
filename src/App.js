import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import SideNavbar from "./components/SideNavbar";
import Newtask from "./pages/NewTask";
import Analytics from "./pages/Analytics";
import ParentSideNavbar from "./components/ParentSideNavbar";
import MocChangeRequest from "./pages/MocChangeRequest";



const App = () => {
  return (
    <div>
      <Router>
      <ParentSideNavbar />
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path= "/hub" exact component={Hub} />
         <Route path= "/newtask" exact component={Newtask} />
         <Route path = "/Analytics" exact component={Analytics}/>
         <Route path="/ChangeRequest" exact component={MocChangeRequest}/>
          {/* <div>
          <SideNavbar/>
          <Route path= "/hub" exact component={Hub} />
          <Route path= "/newtask" exact component={Newtask} />
          <Route path = "/Analytics" exact component={Analytics}/>
        </div> */}
       
        
        </Switch>
            
      </Router>


     
    </div>
  );
};

export default App;
