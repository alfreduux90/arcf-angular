import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { OrganismsModule } from '../organisms/organisms.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    OrganismsModule,
  ],
 
})
export class TemplatesModule { }