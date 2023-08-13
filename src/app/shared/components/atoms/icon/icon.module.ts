import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class IconModule { }