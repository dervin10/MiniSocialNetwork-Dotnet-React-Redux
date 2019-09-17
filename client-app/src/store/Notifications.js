export const initialState = [];

export const newStateNotifications = notification => {
  return {
    type: "NEW_STATE_NOTIFICATION",
    payload: notification
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_STATE_NOTIFICATION": {
      return Object.assign([], initialState, action.payload);
    }
    default:
      return state;
  }
};
