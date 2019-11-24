import {UserState} from "../reducers/user.reducer";
import {createSelector} from "@ngrx/store";

export const getUserState = (state: { user: UserState }): UserState => state.user;

export const getUser = createSelector(
  getUserState,
  (state: UserState) => state.currentUser,
);
