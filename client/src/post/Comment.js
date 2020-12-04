import React, { Component } from "react";
import { comment, deleteComment } from "./apiPost";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import profilePic from "../assets/avatar.png";

class Comment extends Component {
  state = {
    text: "",
    error: "",
  };

  handleChange = (event) => {
    this.setState({ error: "" });
    this.setState({ text: event.target.value });
  };

  isValid = () => {
    const { text } = this.state;
    if (!text.length > 0 || text.length > 200) {
      this.setState({
        error: "Comment should not be empty and less than 200 characters long.",
      });
      return false;
    }
    return true;
  };

  addComment = (event) => {
    event.preventDefault();

    if (!isAuthenticated()) {
      this.setState({ error: "Please sign in to comment!" });
      return false;
    }
    if (this.isValid()) {
      const userId = isAuthenticated().user._id;
      const token = isAuthenticated().token;
      const postId = this.props.postId;

      comment(userId, token, postId, { text: this.state.text }).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.setState({ text: "" });
          // Display comments
          this.props.commentList(data.comments);
        }
      });
    }
  };

  removeComment = (comment) => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;
    const postId = this.props.postId;

    deleteComment(userId, token, postId, comment).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.props.commentList(data.comments);
      }
    });
  };

  confirmDelete = (comment) => {
    let answer = window.confirm("Are you sure you want to delete this comment?");
    if (answer) {
      this.removeComment(comment);
    }
  };

  render() {
    const { comments } = this.props;
    const { error } = this.state;
    return (
      <div>
        <h2 className="mt-5 mb-5" >Leave a comment.</h2>
        <form onSubmit={this.addComment}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Type a comment..."
            />
            <button className="btn btn-raised btn-primary mt-2">
              Post comment
            </button>
          </div>
        </form>
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
        <div className="col-md-12">
          <h3 className="text-primary">{comments.length} Comments</h3>
          <hr />
          {comments.map((comment, i) => (
            <div key={i}>
              <div>
                <Link to={`/user/${comment.postedBy._id}`}>
                  <img
                    style={{ borderRadius: "50%", border: "1px solid black" }}
                    className="float-left mr-2"
                    height="30px"
                    width="30px"
                    onError={(i) => (i.target.src = `${profilePic}`)}
                    src={`${process.env.REACT_APP_API_URL}/user/photo/${comment.postedBy._id}`}
                    alt={comment.postedBy.name}
                  />
                </Link>
                <div>
                  <p className="lead">{comment.text}</p>
                  <p className="font-italic mark">
                    Posted by:{" "}
                    <Link to={`/user/${comment.postedBy._id}`}>
                      {comment.postedBy.name}{" "}
                    </Link>
                    on {new Date(comment.created).toDateString()}
                    <span>
                      {isAuthenticated().user &&
                        isAuthenticated().user._id === comment.postedBy._id && (
                          <>
                            
                            <button
                              onClick={() => 
                                  this.confirmDelete(comment)}
                              className="btn btn-raised btn-sm btn-danger float-right mr-1"
                            >
                              Delete Comment
                            </button>
                          </>
                        )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Comment;
