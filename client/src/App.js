import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Landing from "./pages/Landing"
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import  Signup from "./pages/Signup";
import Post from "./pages/Post";

//import Css from "./src/css";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/landing"]}>
            <Landing />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route exact path="/login">
            <Login />
            </Route>
            <Route exact path="/signup">
            <Signup />
            </Route>
            
            <Route exact path="/post">
            <Post />
            </Route>
          <Route exact path="/footer">
            <Footer />
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
