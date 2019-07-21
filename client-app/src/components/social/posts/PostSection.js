import React, { Component } from "react";
import CreatePost from "./CreatePost";
import UserPost from "./UserPost";
import { connect } from 'react-redux'
import '../../../styles/layout/_posts.scss'
import { connection } from '../../../store/SignalRConnection'

class PostSection extends Component {

  // componentWillMount() {
  //   this.props.
  // }
  componentDidMount = () => {
    connection.on("GetFirstTimePost", res => console.log("POSTS SERVER", res))
  }
  render() {
    const posts = this.props.posts

    return (
      <section className="post-section">
        <CreatePost />
        <UserPost posts={posts} />
      </section>
    );
  }
}

const MapStoreToProps = (store) => {
  return {
    posts: store.posts.posts
  }
}

export default connect(MapStoreToProps)(PostSection);
