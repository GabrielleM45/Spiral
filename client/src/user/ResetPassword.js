import React, { Component } from "react";
import { resetPassword } from "../auth";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      message: "",
      error: "",
    };
  }
  resetPassword = (event) => {
    event.prevent.default();
    this.setState({ message: "", error: "" });

    resetPassword({
      newPassword: this.state.newPassword,
      resetPasswordLink: this.props.match.params.resetPasswordToken,
    }).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ message: data.message, newPassword: "" });
      }
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Reset Password</h2>
        {this.state.message && (
          <h4 className="bg-success">{this.state.message}</h4>
        )}
        {this.state.error && <h4 className="bg-warning">{this.state.error}</h4>}
        <form>
          <div className="form-group mt-5">
            <input
              type="password"
              className="form-control"
              placeholder="New Password"
              value={this.state.newPassword}
              name="newPassword"
              onChange={(event) =>
                this.setState({
                  newPassword: event.target.value,
                  message: "",
                  error: "",
                })
              }
              autoFocus
            />
          </div>
          <button
            onClick={this.resetPassword}
            className="btn btn-raised-btn-primary"
          >
            Reset My Password
          </button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
