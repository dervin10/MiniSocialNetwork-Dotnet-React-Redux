import { ADD_POST } from '../constants/action-types'
import { addPost } from '../store/Posts';

const forbiddenWords = ["facebook", "instagram"]

export function forbiddenWordsMiddleware ({ dispatch, getState }) {
    return function(next) {
        return function(action) {
            // do your stuff

            if (action.type === ADD_POST) {
                console.log("ENTRO AL MIDDLEWARE")
                var strReplaced = "";
                const foundWord = forbiddenWords.filter(word => {
                    strReplaced = action.payload.content.toString()
                    .split(" ")
                    .map(word => forbiddenWords.includes(word) 
                    ? "SuperDuperSocial" 
                    : word)
                })

                if (strReplaced.toString() !== action.payload.content.toString())
                    return dispatch(addPost(strReplaced))
            }
            return next(action)
        }
    }
}