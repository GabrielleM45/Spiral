import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../components/Home"
import Signup from "../user/Signup";

const MainRouter = () => {
    return(
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
    </div>
    )}

export default MainRouter;