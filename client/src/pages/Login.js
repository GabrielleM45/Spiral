import React from 'react'
//import TextFieldGroup from '../common/TextFieldGroup'

export default () => {
  return (
  
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <div className="form-group">
                <p className="lead text-center">
                  Sign in to your Spiral account
                </p>
            <label className="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="email-input" placeholder="Email" />
        </div>

        <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password-input" placeholder="Password" />
        </div>
               
                {/* <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                     type="email"
                     error={errors.email}
                     placeholder="Email Address"
                     name="email"
                     value={this.state.email}
                     onChange={this.onChange}
                  />
                  <TextFieldGroup
                    type="password"
                    error={errors.password}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
         */}
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                {/* </form> */}
              </div>
            </div>
          </div>
        // </div>
      );
    }
  
    
  