import React, { Component } from "react";
import { list } from "./apiUser";
import profilePic from "../assets/avatar.png";
import { Link } from "react-router-dom";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    list().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }
  renderUsers = (users) => (
    <div className="row justify-content-md-center">
      {users.map((user, i) => (
        <div className="card col-md-3 m-1" style={{borderRadius: "10px"}} key={i}>
          <img
          style={{ height: "200px", width: "auto" }}
          className="img-thumbnail mt-2"
          src={`${
            process.env.REACT_APP_API_URL
          }/user/photo/${user._id}`}
          onError={i => (i.target.src = `${profilePic}`)}
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
          </div>
        </div>
      ))}
    </div>
  );

  render() {
    const { users } = this.state;
    return (
      <div className="container" style={{paddingTop: "70px"}} >
        <h2 className="mt-5 mb-5 p-2" style={{backgroundColor: "white", borderRadius: "10px"}}>The Spirl Community:</h2>
        {this.renderUsers(users)}
      </div>
    );
  }
}

export default Users;
