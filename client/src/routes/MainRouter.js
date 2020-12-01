import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Signup from "../user/Signup";
import Signin from "../user/Signin";
import Profile from "../user/Profile";

const MainRouter = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/user/:userId" component={Profile} />
      </Switch>
    </div>
  );
};

export default MainRouter;
