import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "client/src/components/pages/Dashboard.js";
// import Footer from "./src/components/footer";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/"]}>
            <Dashboard />
            {/* </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Posts">
            <Posts />
          </Route>
          <Route exact path="/Members">
            <Members />
          </Route>
          <Route> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
