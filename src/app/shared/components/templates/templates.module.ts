import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { HeaderTemplateComponent } from './header-template/header-template.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';

import { OrganismsModule } from '../organisms/organisms.module';
import { MoleculesModule } from '../molecules/molecules.module';

@NgModule({
  declarations: [
    HeaderTemplateComponent,
    MenuTemplateComponent
  ],
  exports: [
    HeaderTemplateComponent,
    MenuTemplateComponent
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