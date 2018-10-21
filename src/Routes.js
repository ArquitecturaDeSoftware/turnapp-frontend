import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Home from "./views/Home/Home";
import Lunchrooms from "./views/Lunchrooms/Lunchrooms";

class AppRoutes extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component = { Home } exact />
          <Route path="/lunchrooms" component = { Lunchrooms } />
        </Switch>
      </Router>
    );
  }
}

export default AppRoutes;
