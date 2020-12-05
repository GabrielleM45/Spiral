import React from "react";
import Posts from "../post/Posts";
import image from "../assets/spiral.gif";

const Home = () => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <div
        className="jumbotron text-center"
        style={{
          marginTop: "30px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.80)",
        }}
      >
        <picture>
          <source media="(max-width:100px)" />
          <img
            src={image}
            style={{ height: "200px", width: "auto" }}
            alt="Bootstrap 4 jumbotron with Image Tag Background vs CSS background image for SEO"
          />
        </picture>
        <p className="lead">Create Something Wonderful.</p>
      </div>
      <div className="container">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
