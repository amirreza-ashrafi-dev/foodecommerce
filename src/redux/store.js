import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { PersistReducer } from "./rootreducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

export const store = createStore(
  PersistReducer,
  applyMiddleware(...middlewares)
);
export const persisteStore = persistStore(store);
