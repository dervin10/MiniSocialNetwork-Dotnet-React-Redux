import React from "react";
import Person from "../../../images/person.jpg";

// https://codepen.io/eMineiro/pen/vKkdya

const UserPost = ({ posts }) => {
  console.log("try-error", posts);
  let counter = 0;
  return (
    <div>
      {posts &&
        posts.map(post => {
          return (
            <div className="card" key={counter++}>
              <div className="card-header">
                <img className="card-logo" src={Person} alt="person" />
                <a className="card-name" href="#">
                  {post.name}
                </a>
                <div className="card-time">{post.time}</div>
              </div>
              <div className="card-content">{post.content}</div>
              <div className="card-footer">
                <i className="far fa-thumbs-up" />
                <i className="far fa-comment" />
                <i className="fas fa-share" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserPost;
