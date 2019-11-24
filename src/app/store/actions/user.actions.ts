import {createAction, props} from "@ngrx/store";
import {User} from "../model/user";

export const update = createAction(
  '[User API] Update user',
  props<{ user: User }>(),
);

export const remove = createAction(
  '[User API] Remove user',
);
