import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { read } from "./apiUser";
import profilePic from "../assets/avatar.png";
import DeleteProfile from "../user/DeleteProfile";
import FollowButton from "./FollowButton";
import ProfileTabs from "./ProfileTabs";
import { listByUser } from "../post/apiPost";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      error: "",
      posts: [],
    };
  }

  // Check if user is being followed
  checkFollower = (user) => {
    const jwt = isAuthenticated();
    const match = user.followers.find((follower) => {
      // User might have other followers
      return follower._id === jwt.user._id;
    });
    return match;
  };

  followClick = (callApi) => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    callApi(userId, token, this.state.user._id).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ user: data, following: !this.state.following });
      }
    });
  };

  init = (userId) => {
    const token = isAuthenticated().token;
    read(userId, token).then((data) => {
      if (data.error) {
        this.setState({ redirectToSignin: true });
      } else {
        let following = this.checkFollower(data);
        this.setState({ user: data, following });
        this.loadPosts(data._id);
      }
    });
  };

  loadPosts = (userId) => {
    const token = isAuthenticated().token;
    listByUser(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  UNSAFE_componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
  }


  render() {
    const { redirectToSignin, user, posts } = this.state;
    if (redirectToSignin) return <Redirect to="/signin" />;

    const photoUrl = user._id
      ? `${process.env.REACT_APP_API_URL}/user/photo/${
          user._id
        }?${new Date().getTime()}`
      : profilePic;

    return (
      <div className="container" style={{marginTop: "90px", padding: "10px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.95)"}}>
        
        <h2 className="mt-5 mb-5">{user.name}'s Profile</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ height: "200px", width: "auto" }}
              className="img-thumbnail"
              src={photoUrl}
              onError={(i) => (i.target.src = `${profilePic}`)}
              alt={user.name}
            />
          </div>
          <div className="col-md-8">
            <div className="lead mt-2">
              <p>Hello, I'm {user.name}</p>
              <p>Email: {user.email}</p>
              <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
            </div>
            {isAuthenticated().user &&
            isAuthenticated().user._id === user._id ? (
              <div className="d-inline-block">
                <Link
                  className="btn btn-raised btn-info mr-5"
                  to={`/post/create`}
                >
                  Create Post
                </Link>
                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/user/edit/${user._id}`}
                >
                  Edit Profile
                </Link>

                <DeleteProfile userId={user._id} />
              </div>
            ) : (
              <FollowButton
                following={this.state.following}
                onButtonClick={this.followClick}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col md-12 mt-5 mb-5">
            <hr />
            <h5>About Me:</h5>
            <p className="lead">{user.about}</p>

            <hr />
            
            <ProfileTabs
              followers={user.followers}
              following={user.following}
              posts={posts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
