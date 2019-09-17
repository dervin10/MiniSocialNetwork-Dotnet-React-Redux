import {
  ADD_POST,
  LOAD_POST,
  ADD_POST_SAGA,
  LOAD_POST_SAGA
} from "../constants/action-types";

export const initialState = {
  posts: []
};

export const addNewPost = post => {
  return {
    type: ADD_POST_SAGA,
    payload: post
  };
};

export const getPosts = post => {
  return {
    type: LOAD_POST_SAGA,
    payload: post
  };
};

export const reducer = (state = initialState, action) => {
  // state = updateState();

  switch (action.type) {
    case ADD_POST: {
      return Object.assign([], initialState.posts, {
        posts: initialState.posts.concat(action.payload)
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
