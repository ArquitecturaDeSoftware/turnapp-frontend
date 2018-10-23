import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Home from "./views/Home/Home";
import Lunchrooms from "./views/Lunchrooms/Lunchrooms";
import Ticket from "./views/Ticket/Ticket";
import Admin from "./views/Admin/Admin";
import Comments from "./views/Comments/Comments";

class AppRoutes extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component = { Home } exact />
          <Route path="/lunchrooms" component = { Lunchrooms } />
          <Route path="/tickets" component = { Ticket } />
          <Route path="/admins/:id" component = { Admin } />
          <Route path="/comments/:id" component = { Comments } />
        </Switch>
      </Router>
    );
  }
}

export default AppRoutes;
