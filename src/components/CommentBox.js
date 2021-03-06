import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = {comment: ""};

  handleChange = (e) => this.setState({comment: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    /*once text   is submitted the field is to be cleared up */
    this.setState({comment: ""});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
            cols="30"
            rows="10"
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}
export default connect(null, actions)(CommentBox);
