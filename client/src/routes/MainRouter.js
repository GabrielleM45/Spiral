import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Signup from "../user/Signup";
import Signin from "../user/Signin";
import Profile from "../user/Profile";
import Users from "../user/Users";
import EditProfile from "../user/EditProfile";
import FindPeople from "../user/FindPeople";
import NewPost from "../post/NewPost";
import SinglePost from "../post/SinglePost";
import PrivateRoute from "../auth/PrivateRoute";
import UpdatePost from "../post/UpdatePost";
import Footer from "../components/Footer.js"


const MainRouter = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/post/create" component={NewPost} />
        <Route exact path="/post/:postId" component={SinglePost} />
        <PrivateRoute exact path="/post/edit/:postId" component={UpdatePost} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
        <PrivateRoute exact path="/findpeople" component={FindPeople} />
        <PrivateRoute exact path="/user/:userId" component={Profile} />
        
      </Switch>
      <Footer />
    </div>
  );
};

export default MainRouter;
