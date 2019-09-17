import React, { Component } from "react";
import CreatePost from "./CreatePost";
import UserPost from "./UserPost";
import { connect } from "react-redux";
import "../../../styles/layout/_posts.scss";
import { addNewPost, getPosts } from "../../../store/Posts";

class PostSection extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    const posts = this.props.posts;

    return (
      <section className="post-section">
        <CreatePost
          addPost={this.props.addPost}
          username={this.props.username}
        />
        <UserPost posts={posts} />
      </section>
    );
  }
}

const MapStoreToProps = store => {
  return {
    posts: store.postsReducer.posts,
    username: store.nameReducer.name
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addNewPost(post)),
    getPost: _ => dispatch(getPosts())
  };
};

export default connect(
  MapStoreToProps,
  MapDispatchToProps
)(PostSection);
