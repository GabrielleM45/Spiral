import React, { Component } from "react";
import { list } from "./apiPost";
import defaultPic from "../assets/mountain.jpg";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    list().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  }
  renderPosts = (posts) => {
    return (
      <div className="row">
        {posts.map((post, i) => {
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";
          return (
            <div className="card col-md-12 mb-2" style={{borderRadius: "10px"}} key={i}>
              <div className="card-body">
                <img
                  src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`}
                  alt={post.title}
                  onError={i => i.target.src = `${defaultPic}`}
                  className="img-thumbnail mb-3 mr-5 float-left"
                  style={{ height: "200px", width: "auto" }}
                />
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 50)}</p>
                <br />
                <p className="font-italic mark">
                  Posted By <Link to={`${posterId}`}>{posterName} </Link>on{" "}
                  {new Date(post.created).toDateString()}
                </p>
                <Link
                  to={`/post/${post._id}`}
                  className="btn btn-raised btn-primary btn-sm"
                >
                  Read more...
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container" >
        <h2 className="mt-5 mb-5 p-2" style={{backgroundColor: "white", borderRadius: "10px"}}>{!posts.length ? "Loading..." : "Recent Posts:"}</h2>
        {this.renderPosts(posts)}
      </div>
    );
  }
}

export default Posts;
