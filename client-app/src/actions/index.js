
// THIS IS CODE FOR REDUX-THUNK
// export function getTimeServer() {
//     return async function (dispatch) {
//         return fetch("https://localhost:9000/api/time")
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             dispatch({type: "RELOAD_TIME", payload: json})
//         });
//     };
// }

export function getTimeServer() {
    return {type: "RELOAD_TIME"}
}