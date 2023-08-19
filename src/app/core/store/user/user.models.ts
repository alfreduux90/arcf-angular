import { User } from '../../models/backend/user'; 

export { User as UserResponse } from '../../models/backend/user';

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface UserRequest extends User {
  password1: string;
  password2: string;
}

export type UserCreateRequest = Omit<UserRequest, 'token'>;
