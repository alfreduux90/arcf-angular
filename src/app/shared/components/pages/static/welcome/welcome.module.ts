import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatCardModule
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }