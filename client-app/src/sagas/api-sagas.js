import { takeEvery, call, put } from "redux-saga/effects"
import { connection } from '../store/SignalRConnection'

export default function* watcherSaga() { 
    console.log("SAGA-ENTERED...");
    yield takeEvery("NEW_STATE_SAGA", workerNewOnlines);
    yield takeEvery("RELOAD_TIME", workerSaga);
    yield takeEvery("ADD_POST", workerAddPost);
}

function* workerNewOnlines(action) {
    try {
        let { payload } = action;
        yield put( { type: "NEW_STATE", payload } );
    } catch(e) {
        alert("Something went wrong")
    } 
}

function* workerAddPost() {
    try {
        const payload = yield call(AddPost)
    } catch(e) {
        yield alert("SOMTHING WENT WRONG WITH REDUX-SADA in workerAddPost")
    }
}

function AddPost() {
    return connection.on("NewPost", (object) => console.log(object))
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put( { type: "RELOAD_TIME_LOADED", payload} )
    } catch (e) {
        yield alert("SOMTHING WENT WRONG WITH REDUX-SADA")
    }
}

function getData() {
    return fetch("https://localhost:9000/api/time")
    .then(response => response.json())
}