import React from 'react';
import '../assets/css/App.css';


export default function logIn () {
    return 
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <h2>Login Form</h2>
            <form className="login">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password-input" placeholder="Password" />
                </div>
                <div style={{display: "none" }}id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span> <span className="msg"></span>
                </div>          <button type="submit" className="btn btn-default">Login</button>
            </form>
            <br />
            <p>Or sign up <a href="/signup">here</a></p>
        </div>
    </div>
</div>




}
