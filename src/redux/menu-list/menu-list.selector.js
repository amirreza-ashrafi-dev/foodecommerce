import { createSelector } from "reselect";

const menuList = (state) => state.menuList;

export const fetchMenuList = createSelector(
  [menuList],
  (lists) => lists.menuList
);
