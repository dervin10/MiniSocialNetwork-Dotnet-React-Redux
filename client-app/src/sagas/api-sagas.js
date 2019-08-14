import { takeEvery, call, put, fork } from "redux-saga/effects";

export default function* watcherSaga() {
  console.log("SAGA-ENTERED...");
  yield takeEvery("NEW_STATE_SAGA", workerNewOnlines);
  yield takeEvery("ADD_POST_SAGA", workerNewPost);
  yield takeEvery("RELOAD_TIME", workerSaga);
}

function* workerNewPost(action) {
  try {
    const payload = yield call(addNewPost, action.payload);
    yield put({ type: "ADD_POST", payload });
  } catch (e) {
    alert("Something went wrong");
  }
}

function addNewPost(post) {
  // TODO: Replace all facebook word with socialNetwork.
  return fetch("https://localhost:9000/api/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: post
    })
  }).then(response => response.json());
}

function* workerNewOnlines(action) {
  try {
    let { payload } = action;
    yield put({ type: "NEW_STATE", payload });
  } catch (e) {
    alert("Something went wrong");
  }
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "RELOAD_TIME_LOADED", payload });
  } catch (e) {
    yield alert("SOMTHING WENT WRONG WITH REDUX-SADA");
  }
}

function getData() {
  return fetch("https://localhost:9000/api/time").then(response =>
    response.json()
  );
}
