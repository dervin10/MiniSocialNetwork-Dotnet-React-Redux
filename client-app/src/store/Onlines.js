import { NEW_STATE_ONLINE, NEW_STATE_SAGA } from "../constants/action-types";

const initialState = [];

export const newStateOnlines = onlines => {
  return {
    type: NEW_STATE_SAGA,
    payload: onlines
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_STATE_ONLINE: {
      return Object.assign([], initialState, action.payload);
    }
    default:
      return state;
  }
};
