const initialState = "Loading...";

export const RefreshTime = (time) => {
    return {
            type: "RELOAD_TIME", 
            payload: time
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RELOAD_TIME_LOADED": {
            return Object.assign([], state, action.payload.time)
        }
        default:
            return state
    }
};

