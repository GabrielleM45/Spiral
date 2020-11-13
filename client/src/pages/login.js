import React from "react";
function Login() {
    return (
        <body>

           
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

            <div className="footer">
                © <a href="https://github.com/strawberryboar" target="__blank">Athena Petrovich</a> | <a href="https://github.com/maynperalta" target="__blank">Maynard Peralta</a> | <a href="https://github.com/vmcgargill" target="__blank">Vincent McGargill</a>
            </div>


            <ul id="ui-id-1" tabindex="0" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{display: "none"}}></ul><div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div></body>
    )
}

export default Login;