import React from 'react'

export default () => {
  return (
    
    <div className="signup">
    <div className="container">
      
      <div className="col-md-8 m-auto">
      <h1 className="display-4 text-center">Signup</h1>
    
        <div className="form-group">
        <p className="lead text-center">
                  Signup for  Spiral account
                </p>
          <label for="name-input">Name</label>
          <input type="text" className="form-control" id="name-input" placeholder="Name" />
        </div>
        <div className="form-group">
          <label for="email-input">Email address</label>
          <input type="email" className="form-control" id="email-input" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Password" />
        </div>
        {/* {{> error}} */}
        <input type="submit" className="btn btn-info btn-block mt-4" />
     
      <br />
      <p>Or log in <a href="/login">here</a></p>
    </div>
</div>
</div>
  )
}
  
  
