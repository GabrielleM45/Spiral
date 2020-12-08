import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ff9900" };
  else return { color: "#ffffff" };
};

const Nav = ({ history }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav`" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/users")}
            to="/users"
          >
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`/post/create`}
            style={isActive(history, `/post/create`)}
            className="nav-link"
          >
            Create Post
          </Link>
        </li>
        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signup")}
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                to={`/findpeople`}
                style={isActive(history, `/findpeople`)}
                className="nav-link"
              >
                Find People
              </Link>

            </li>
            <li className="nav-item">
              <Link
                to={`/frame`}
                style={isActive(history, `/frame`)}
                className="nav-link"
              >
                Chat
              </Link>

            </li>

            <li className="nav-item">
              <Link
                to={`/user/${isAuthenticated().user._id}`}
                style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                className="nav-link"
              >
                {`${isAuthenticated().user.name}'s Profile`}
              </Link>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                style={(isActive(history, "/signout"), { cursor: "pointer", color: "white" })}
                onClick={() => signout(() => history.push("/"))}
              >
                Sign Out
              </span>
            </li>
          </>
        )}
      </ul>
      </div>
      </nav>
    </div>
  );
};

export default withRouter(Nav);
