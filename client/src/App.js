import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup"
import Posts from "./pages/posts"
import Members from "./pages/members"
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
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
