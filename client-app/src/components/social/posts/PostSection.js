import React, { Component } from "react";
import CreatePost from "./CreatePost";
import UserPost from "./UserPost";
import { connect } from "react-redux";
import "../../../styles/layout/_posts.scss";
import { connection } from "../../../store/SignalRConnection";
import { addNewPost, getPost } from "../../../store/Posts";

class PostSection extends Component {
  render() {
    const posts = this.props.posts;

    fetch("https://localhost:9000/api/post").then(res => res.json());

    return (
      <section className="post-section">
        <CreatePost addPost={this.props.addPost} />
        <UserPost posts={posts} />
      </section>
    );
  }
}

const MapStoreToProps = store => {
  return {
    posts: store.posts.posts
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addNewPost(post)),
    getPost: post => dispatch(getPost(post))
  };
};

export default connect(
  MapStoreToProps,
  MapDispatchToProps
)(PostSection);
