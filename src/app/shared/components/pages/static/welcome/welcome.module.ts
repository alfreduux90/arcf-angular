import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MatCardModule } from '@angular/material/card';
import { AtomsModule } from '../../../atoms/atoms.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatCardModule,
    AtomsModule
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }