import React, { Component } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/avatar.png";
import defaultPic from "../assets/mountain.jpg";


class ProfileTabs extends Component {
  render() {
    const { following, followers, posts } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <h3 className="text-primary">Followers</h3>
            <hr />
            {followers.map((person, i) => (
              <div key={i}>
                <div>
                  <Link to={`/user/${person._id}`}>
                    <img
                      style={{ borderRadius: "50%", border: "1px solid black" }}
                      className="float-left mr-2"
                      height="30px"
                      width="30px"
                      onError={(i) => (i.target.src = `${profilePic}`)}
                      src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`}
                      alt={person.name}
                    />
                    <div>
                      <p className="lead">{person.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
              
            ))}
          </div>
          <div className="col-md-3">
            <h3 className="text-primary">Following</h3>
            <hr />
            {following.map((person, i) => (
              <div key={i}>
                <div>
                  <Link to={`/user/${person._id}`}>
                    <img
                      style={{ borderRadius: "50%", border: "1px solid black" }}
                      className="float-left mr-2"
                      height="30px"
                      width="30px"
                      onError={(i) => (i.target.src = `${profilePic}`)}
                      src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`}
                      alt={person.name}
                    />
                    <div>
                      <p className="lead">{person.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h3 className="text-primary">Posts</h3>
            <hr />
            {posts.map((post, i) => (
              <div key={i}>
                <div>
                  <Link to={`/post/${post._id}`}>
                  <img
                      src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`}
                      alt={post.title}
                      onError={(i) => (i.target.src = `${defaultPic}`)}
                      className="float-left mr-2"
                      style={{ height: "50px", width: "auto", objectFit: "cover" }}
                    />
                    <div>
                      <p className="lead">{post.title}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTabs;
