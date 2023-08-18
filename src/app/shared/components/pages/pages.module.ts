import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TemplatesModule,
  ],
 
})
export class PagesModule { }