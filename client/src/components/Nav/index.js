import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand">
    <a className="navbar-brand" href="/">Spiral</a>
    <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active" id="HomeItem">
                <a className="nav-link" href="/" id="HomeLink">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/members" id="EmpLink">Members</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/blogs" id="DepLink">Blogs</a>
            </li>
            <li className="nav-item dropdown hidden" id="LoggedInMenu">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
  </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/postBlog">Create Blog</a>
                    <a className="dropdown-item" href="/categories">Categories</a>
                    <a className="dropdown-item" href="/UserProfile">Profile</a>
                    <a className="dropdown-item" href="/logout">Logout</a>
                </div>
            </li>
            <li className="nav-item" id="Login">
                <a className="nav-link" href="/login" id="RoleLink">Login</a>
            </li>
            <li className="nav-item" id="Signup">
                <a className="nav-link" href="/signup" id="RoleLink">Create Account</a>
            </li>
        </ul>
    </div>
    <div>
        <input id="SearchBlogInput" placeholder="Search Blogs by Title" type="text" className="ui-autocomplete-input" autocomplete="off" />
        <button id="SearchBlogBtn" className="button">Search</button>
        <div style={{display: "none"}} id="searchAlert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
        </div>
    </div>
</nav>


  );
}

export default Nav;
