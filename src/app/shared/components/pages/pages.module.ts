import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MaterialModule } from '../../../material.module';

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
    MaterialModule,
    TemplatesModule
  ],
 
})
export class PagesModule { }