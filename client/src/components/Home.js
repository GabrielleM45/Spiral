import React from "react";
import Posts from "../post/Posts";

const Home = () => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="jumbotron" >
        <h2>Welcome to the Spirl</h2>
        <p className="lead">Create Something Wonderful.</p>
      </div>
      <div className="container">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
