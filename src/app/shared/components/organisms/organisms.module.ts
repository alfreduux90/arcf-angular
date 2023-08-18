import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FormOrganismComponent } from './form-organism/form-organism.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
    declarations: [
      FooterComponent, 
      HeaderMenuComponent, 
      FormOrganismComponent,
      MenuItemComponent
    ],
    exports: [
      FooterComponent, 
      HeaderMenuComponent, 
      FormOrganismComponent,
      MenuItemComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      AtomsModule,
      MoleculesModule
    ]
})
export class OrganismsModule {}