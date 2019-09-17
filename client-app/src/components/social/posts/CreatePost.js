import React, { Component } from "react";

class CreatePost extends Component {
  state = {
    content: ""
  };

  handleChange = e =>
    this.setState({
      [e.target.id]: e.target.value
    });

  handleSubmit = e => {
    e.preventDefault();

    this.props.addPost({
      content: this.state.content,
      username: this.props.username
    });
    this.setState({
      content: ""
    });
  };

  render() {
    const { content } = this.state;
    return (
      <section className="post">
        <form onSubmit={this.handleSubmit} className="posts">
          <div className="posts-create">
            <div className="posts-title">Create Post</div>
            <textarea
              type="text"
              id="content"
              onChange={this.handleChange}
              value={content}
            />
            <button className="posts-b">Share</button>
            {/* <button className="posts-btn">Share</button> */}
          </div>
        </form>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     AddPost: post => dispatch(addPost(post))
//   };
// };

export default CreatePost;
