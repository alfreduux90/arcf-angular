import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions } from "@ngrx/effects";
import * as fromActions from './user.actions';

type Action = fromActions.All;

@Injectable
export class UserEffects {

  constructor(
    private httpClient: HttpClient,
    private actions: Actions
  ){}

}