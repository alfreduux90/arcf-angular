import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../../../shared/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [
    HomepageModule
  ],
  exports: [
    HomepageModule
  ] 
})
export class HomepageModule { }