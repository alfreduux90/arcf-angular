import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { MatCardModule } from '@angular/material/card';
import { MoleculesModule } from '../../../molecules/molecules.module'

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MatCardModule,
    MoleculesModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }