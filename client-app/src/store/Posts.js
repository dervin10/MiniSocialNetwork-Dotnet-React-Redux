import { ADD_POST, LOAD_POST } from "../constants/action-types";

export const initialState = {
  posts: [
    {
      name: "Dervin",
      content: "This is a post",
      time: "11:54:20 GMT-0400 (Bolivia Time)"
    },
    {
      name: "Jose",
      content: "This is a post from jose",
      time: "11:54:20 GMT-0400 (Bolivia Time)"
    }
  ]
};

export const addNewPost = post => {
  return {
    type: "ADD_POST_SAGA",
    payload: post
  };
};

export const getPost = post => {
  return {
    type: "ADD_POST_SAGA",
    payload: post
  };
};

export const reducer = (state = initialState, action) => {
  // state = updateState();

  switch (action.type) {
    case ADD_POST: {
      console.log("ADD_POST", action);
      return Object.assign([], state.posts, {
        posts: state.posts.concat(action.payload)
      });
    }
    case LOAD_POST: {
      return Object.assign([], state.posts, {
        posts: state.posts.concat(action.payload)
      });
    }
    default:
      return state;
  }
};

function updateState(state) {
  let currentTime = new Date();
  return state.filter(
    notification =>
      currentTime.getSeconds() - notification.time.getSeconds() > 15
  );
}
