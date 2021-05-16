import React, { Component, Fragment } from "react";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Gender from "./Adult/Gender";
import Age from "./Adult/Age";
import Skill from "./Adult/Skills";
import Team from "./team";
import Clssf from "./clssf";

import CAge from "./Child/C_Age";
import CSkill from "./Child/C_Skills";

class Userform extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Clssf} />
            <Route exact path="/home" component={Clssf} />
            <Route exact path="/gender" component={Gender} />
            <Route exact path="/age" component={Age} />
            <Route exact path="/skill" component={Skill} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/c_age" component={CAge} />
            <Route exact path="/c_skill" component={CSkill} />
          </Switch>
          {/*This is 2nd method (1st is homepage )if you need to send props during route you need to specify like this*/}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default Userform;
