import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "../../modules/loginresponse.model";

//this is used to store the data in local storage
export const setLoginData = createAction(
    'SET_LOGIN_DATA',
    props<{ loginResponse: LoginResponse }>()
  );

// this is used for remove login data form storage
export const removeLoginData= createAction('REMOVE_LOGIN_DATA');