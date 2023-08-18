import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { MoleculesModule } from '../molecules/molecules.module';

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
    MoleculesModule 
  ],
 
})
export class TemplatesModule { }