import React, { Component } from "react";
import { findPeople, follow } from "./apiUser";
import profilePic from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

class FindPeople extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: "",
      open: false
    };
  }

  componentDidMount() {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    findPeople(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  clickFollow = (user, i) => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;
    follow(userId, token, user._id).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        let toFollow = this.state.users;
        toFollow.splice(i, 1);
        this.setState({ users: toFollow, open: true, followMessage: `${user.name} followed!` })
      }
    });
  };

  renderUsers = (users) => (
    <div className="row justify-content-md-center">
      {users.map((user, i) => (
        <div className="card col-md-3 m-1" style={{borderRadius: "10px"}} key={i}>
          <img
            style={{ height: "200px", width: "auto" }}
            className="img-thumbnail mt-2"
            src={`/user/photo/${user._id}`}
            onError={(i) => (i.target.src = `${profilePic}`)}
            alt={user.name}
          />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <Link
              to={`/user/${user._id}`}
              className="btn btn-raised btn-primary btn-sm"
            >
              View Profile
            </Link>
            <button
              onClick={() => this.clickFollow(user, i)}
              className="btn btn-raised btn-info float-right btn-sm"
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  render() {
    const { users, open, followMessage } = this.state;
    return (
      <div className="container" style={{paddingTop: "70px"}}>
        <h2 className="mt-5 mb-5 p-2" style={{backgroundColor: "white", borderRadius: "10px"}}>Connect with other People:</h2>
        {open && <div className="alert alert-success">
            {open && <p>{followMessage}</p>}
        </div>}
        {this.renderUsers(users)}
      </div>
    );
  }
}

export default FindPeople;
