import { ADD_NAME } from "../constants/action-types";

const initialState = {
  name: ""
};

export const addNewName = name => {
  return {
    type: ADD_NAME,
    payload: name
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME: {
      console.log("ENTERED NAME", action.payload);
      return Object.assign("", initialState.name, {
        name: action.payload
      });
    }
    default:
      return state;
  }
};
