const initialState = [];

export const newStateOnlines = (onlines) => {
    return {
        type: "NEW_STATE_SAGA",
        payload: onlines
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_STATE": {
            return Object.assign([], initialState, action.payload)
        }
        default:
            return state
    }
};

