import {User} from "../model/user";
import {Action, ActionReducer, createReducer, on} from "@ngrx/store";
import {remove, update} from "../actions/user.actions";

export interface UserState {
  currentUser: User | undefined,
}

export const initialUserState: UserState = {
  currentUser: undefined,
};

const userReducer = createReducer(
  initialUserState,
  on(update, (state, { user }) => ({
    ...state,
    currentUser: user,
  })),
  on(remove, state => ({
    ...state,
    currentUser: undefined,
  })),
);

export const reducer: ActionReducer<UserState, Action> = (state: UserState | undefined, action: Action) => {
  return userReducer(state, action);
};
