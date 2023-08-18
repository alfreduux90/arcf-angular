import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../../shared/components/templates/templates.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomepageModule
  ],
  exports: [
    HomepageModule
  ], 
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule
  ]
})
export class HomepageModule { }