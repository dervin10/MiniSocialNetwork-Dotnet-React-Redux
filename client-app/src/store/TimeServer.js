import {
  RELOAD_TIME_SAGA,
  RELOAD_TIME_LOADED
} from "../constants/action-types";

const initialState = "Loading...";

export const getTimeServer = _ => {
  return { type: RELOAD_TIME_SAGA };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RELOAD_TIME_LOADED: {
      return Object.assign([], state, action.payload.time);
    }
    default:
      return state;
  }
};
