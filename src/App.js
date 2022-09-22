import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hub from "./pages/Hub";

const App = () => {
  return (
    <div>
      <Router>
            <Route path="/" exact component={Home} />
            <Route path= "/Hub">
              <Hub />
            </Route>
      </Router>
     
    </div>
  );
};

export default App;
