import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers
import menuList from "./menu-list/menu-list.reducer";
import offs from "./offs/offs.reducer";
import Cart from "./cart/cart.reducer";

const rootReducer = combineReducers({
  menuList: menuList,
  offs: offs,
  Cart: Cart,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart"],
};

export const PersistReducer = persistReducer(persistConfig, rootReducer);
