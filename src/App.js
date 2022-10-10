import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import SideNavbar from "./components/SideNavbar";
import Newtask from "./pages/NewTask";
import Analytics from "./pages/Analytics";
import ParentSideNavbar from "./components/ParentSideNavbar";
import MocChangeRequest from "./pages/MocChangeRequest";
import ImpactAssessment from "./pages/ImpactAssessment";
import LandingPage from "./pages/LandingPage";
import ReactTable from "./pages/ActionPlan";
import MocTable from "./pages/mocDashboard";
import SparrowRMSLogo from "./components/SparrowRMSLogo";



const App = () => {
  return (
    <div>
      <Router>
      <ParentSideNavbar />
      <SparrowRMSLogo/>
        <Switch>
         <Route path="/" exact component={LandingPage} />
         <Route path= "/hub" exact component={Hub} />
         <Route path= "/newtask" exact component={Newtask} />
         <Route path = "/Analytics" exact component={Analytics}/>
         <Route path="/ChangeRequest" exact component={MocChangeRequest}/>
         <Route path="/ImpactAssessment" exact component={ImpactAssessment}/>
         <Route path="/home" exact component={Home}/>
         <Route path="/ActionPlan" exact component={ReactTable}/>
         <Route path="/Dashboard" exact component={MocTable}/>
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
