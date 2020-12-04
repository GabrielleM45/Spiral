import React from "react";
import Posts from "../post/Posts";

const Home = () => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="jumbotron text-center" style={{marginTop: "30px", padding: "10px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.80)"}}>
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
