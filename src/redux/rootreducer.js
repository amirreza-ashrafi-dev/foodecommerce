import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers
import menuList from "./menu-list/menu-list.reducer";
import offs from "./offs/offs.reducer";

const rootReducer = combineReducers({
  menuList: menuList,
  offs: offs,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

export const PersistReducer = persistReducer(persistConfig, rootReducer);
