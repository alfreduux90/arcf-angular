import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MatCardModule } from '@angular/material/card';
import { MoleculesModule } from '../../../molecules/molecules.module'

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatCardModule,
    MoleculesModule
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }