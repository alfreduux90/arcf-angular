import { Action } from "@ngrx/store";
import { EmailPasswordCredentials, UserCreateRequest, UserResponse } from './user.models';

export enum Types {

  INIT = '[User] Init : Start',
  INIT_AUTHORIZED = '[User] Init : Authorized',
  INIT_UNAUTHORIZED = '[User] Init : Unauthorized',
  INIT_ERROR = '[User] Init : Error',

  SIGNIN_IN_EMAIL = '[User] Login : Start',
  SIGNIN_IN_EMAIL_SUCCESS = '[User] Login : Success',
  SIGNIN_IN_EMAIL_ERROR = '[User] Login : Error',

  SIGNIN_UP_EMAIL = '[User] Sign Up : Start',
  SIGNIN_UP_EMAIL_SUCCESS = '[User] Sign Up : Success',
  SIGNIN_UP_EMAIL_ERROR = '[User] Sign Up : Error',

  SIGNIN_OUT_EMAIL = '[User] Logout : Start',
  SIGNIN_OUT_EMAIL_SUCCESS = '[User] Logout : Success',
  SIGNIN_OUT_EMAIL_ERROR = '[User] Logout : Error',

}


