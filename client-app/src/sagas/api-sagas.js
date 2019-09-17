import { takeEvery, call, put } from "redux-saga/effects";
import { connection } from "../store/SignalRBuilder";
import {
  NEW_STATE_ONLINE,
  NEW_STATE_SAGA,
  ADD_POST_SAGA,
  LOAD_POST_SAGA,
  RELOAD_TIME_SAGA,
  RELOAD_TIME_LOADED,
  LOAD_POST
} from "../constants/action-types";

export default function* watcherSaga() {
  yield takeEvery(NEW_STATE_SAGA, workerNewOnlines);
  yield takeEvery(ADD_POST_SAGA, workerNewPost);
  yield takeEvery(RELOAD_TIME_SAGA, workerSaga);
  yield takeEvery(LOAD_POST_SAGA, worketLoadPost);
}

function* worketLoadPost() {
  try {
    const payload = yield call(getPosts);
    yield put({ type: LOAD_POST, payload });
  } catch (e) {
    alert("Something went wrong");
  }
}

async function getPosts() {
  return await fetch("https://localhost:9000/api/post").then(response =>
    response.json()
  );
}

function* workerNewPost(action) {
  try {
    action.payload.content = forbiddenWordsMiddleware(action.payload.content);
    const response = yield call(addNewPost, action.payload);
    if (response === 200)
      connection.invoke("UserPosted", action.payload.username);
    else alert("something went wrong with the response: " + response);
  } catch (e) {
    alert("Something went wrong");
  }
}

function addNewPost(body) {
  // TODO: Replace all facebook word with socialNetwork.
  return fetch("https://localhost:9000/api/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.status);
}

function forbiddenWordsMiddleware(content) {
  const forbiddenWords = ["facebook", "instagram"];

  return content
    .split(" ")
    .map(word =>
      forbiddenWords.includes(word.toLowerCase()) ? "SuperDuperSocial" : word
    )
    .join(" ");
}

function* workerNewOnlines(action) {
  try {
    let { payload } = action;
    yield put({ type: NEW_STATE_ONLINE, payload });
  } catch (e) {
    alert("Something went wrong");
  }
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: RELOAD_TIME_LOADED, payload });
  } catch (e) {
    yield alert("SOMTHING WENT WRONG WITH REDUX-SADA");
  }
}

function getData() {
  return fetch("https://localhost:9000/api/time").then(response =>
    response.json()
  );
}
