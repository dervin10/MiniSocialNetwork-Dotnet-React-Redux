import { ADD_POST } from "../constants/action-types";
import { addNewPost } from "../store/Posts";

const forbiddenWords = ["facebook", "instagram"];

export function forbiddenWordsMiddleware({ dispatch, getState }) {
  return function(next) {
    return function(action) {
      // do your stuff
      // const forbiddenWord = ["facebook", "instagram"];
      if (action.type === ADD_POST) {
        console.log("ENTRO AL MIDDLEWARE");
        var strReplaced = "";
        const foundWord = forbiddenWords.filter(word => {
          strReplaced = action.payload.content
            .toString()
            .split(" ")
            .map(word =>
              forbiddenWords.includes(word) ? "SuperDuperSocial" : word
            );
        });

        if (strReplaced.toString() !== action.payload.content.toString())
          return dispatch(addNewPost(strReplaced));
      }
      return next(action);
    };
  };
}
