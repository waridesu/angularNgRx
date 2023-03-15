import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { LoginRequestInterface } from "../../types/login-request.interface";
import { CurrentUserInterface } from "../../../shared/current-user.interface";

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
)
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)

