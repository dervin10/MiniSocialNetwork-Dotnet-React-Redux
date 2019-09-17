import React from "react";
import Person from "../../../images/person.jpg";

// https://codepen.io/eMineiro/pen/vKkdya

const msToTime = dateTime => {
  let differenceTime = new Date() - dateTime;
  let differenceDays = parseInt(differenceTime / (1000 * 3600 * 24));
  let differenceHours = parseInt(Math.abs(new Date() - dateTime) / 36e6);
  let differenceMinutes = parseInt(differenceTime / 1000 / 60);
  // let differenceSeconds = parseInt(differenceTime / 1000);

  if (differenceDays > 0) {
    if (differenceDays === 1)
      return `Yesterday at 
      ${
        dateTime.getHours() > 12
          ? dateTime.getHours() - 12
          : dateTime.getHours()
      }:
      ${dateTime.getMinutes()} 
      ${dateTime.getHours() > 12 ? "PM" : "AM"}`;

    return differenceDays + " days ago";
  } else {
    if (differenceHours > 0)
      return differenceHours + differenceHours === 1 ? " hr" : " hrs";
    else if (differenceMinutes > 0) return differenceMinutes + " mins";
    else return "Just now";
  }
};

const UserPost = ({ posts }) => {
  let counter = 0;
  return (
    <div>
      {posts &&
        posts
          .slice()
          .reverse()
          .map(post => {
            return (
              <div className="card" key={counter++}>
                <div className="card-header">
                  <img className="card-logo" src={Person} alt="person" />
                  <a className="card-name" href="#">
                    {post.name}
                  </a>
                  <div className="card-time">
                    {msToTime(new Date(post.time))}
                  </div>
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
