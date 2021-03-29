import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import reducer from "../reducers";
import rootSaga from "../rootSaga";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({});

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);
console.log(rootSaga);
sagaMiddleware.run(rootSaga);
export default store;
