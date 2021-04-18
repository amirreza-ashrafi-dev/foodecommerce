import { createSelector } from "reselect";

const Off = (state) => state.offs;

export const fetchOffs = createSelector([Off], (off) => off.offLists);
