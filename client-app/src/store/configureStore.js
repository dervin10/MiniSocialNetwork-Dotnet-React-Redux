import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-sagas";
import * as Onlines from "./Onlines";
import * as Name from "./Name";
import * as Notifications from "./Notifications";
import * as Posts from "./Posts";
import * as TimeServer from "./TimeServer";
import { forbiddenWordsMiddleware } from "../middleware/index";

export default function configureStore(history, initialState) {
  const reducers = {
    onlines: Onlines.reducer,
    postsReducer: Posts.reducer,
    notifications: Notifications.reducer,
    time: TimeServer.reducer,
    nameReducer: Name.reducer
  };

  //   const middleware = [thunk, routerMiddleware(history)];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  // return createStore(
  //     rootReducer,
  //     initialState,
  //     compose(applyMiddleware(...middleware), ...enhancers)
  // );

  const initialiseSagaMiddleware = createSagaMiddleware();

  const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    // storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
    storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
  );

  initialiseSagaMiddleware.run(apiSaga);

  return store;
}
