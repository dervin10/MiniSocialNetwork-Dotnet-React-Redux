import React, { Component } from "react";
import { connect } from 'react-redux'
import { addPost } from '../../../store/Posts'
import { connnection, connection } from '../../../store/SignalRConnection'


class CreatePost extends Component {
state = {
  content: ""
}

handleChange = e => 
  this.setState({
    [e.target.id]: e.target.value
  })


handleSubmit = e => {
  e.preventDefault();
  const { content } = this.state;

  const forbiddenWord = ["facebook", "instagram"]
  this.props.AddPost(this.state.content)
  this.setState({
    content: ""
  })
  connection.on("NewPost", (object) => console.log(object))
  
  connection.invoke("Testing", "Test");
  connection.invoke("AddPost", "Testing the connection, if you read this it work's")
  .then(this.props.AddPost(this.state.content))
  .catch(err => console.log(err));
}

  render() {
    console.log(this.props)
    const { content } = this.state;
    return (
      <section className="post">
        <form onSubmit={this.handleSubmit} className="posts">
          <div className="posts-create">
            <div className="posts-title">Create Post</div>
            <textarea type="text" id="content" onChange={this.handleChange} value={content}/>
            <button className="posts-b">Share</button>
            {/* <button className="posts-btn">Share</button> */}
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddPost: (post) => dispatch(addPost(post))
  }
}

export default connect(null, mapDispatchToProps)(CreatePost);
