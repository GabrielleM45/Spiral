import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
       <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
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
          <Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
