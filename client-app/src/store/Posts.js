import { ADD_POST } from '../constants/action-types';

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
}

export const addPost = (post) => {
    return {
            type: ADD_POST,
            payload: {
                name: "Dervin",
                content: post,
                time: "Testing Time"
            }
        }
};


export const reducer = (state = initialState, action) => {
    // state = updateState();

    switch (action.type) {
        case ADD_POST: {
            return Object.assign([], state.posts, {
                posts: state.posts.concat(action.payload)
            })
        }
        default:
            return state
    }
}

function updateState(state) {
    let currentTime = new Date();
    return state.filter(notification => currentTime.getSeconds() - notification.time.getSeconds() > 15)
}
