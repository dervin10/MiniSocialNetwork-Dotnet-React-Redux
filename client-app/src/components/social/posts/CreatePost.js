import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../../store/Posts";
import { connection } from "../../../store/SignalRConnection";

// Estaba bregando el post agregar a la base de datos desde react,
// el backend con mongo pienso que esta bastante bien, solo faltaria conectarlo.

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
    const { content } = this.state;
    console.log("handleSubmit", this.props);

    const forbiddenWord = ["facebook", "instagram"];
    this.props.addPost(this.state.content);
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
