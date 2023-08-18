import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { ShowAuthedDirective } from '../../directives/show-authed.directive';



@NgModule({
    declarations: [
      FooterComponent,
      HeaderComponent, 
      MenuComponent
    ],
    exports: [
      FooterComponent,
      HeaderComponent, 
      MenuComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      MaterialModule,
      ShowAuthedDirective,
      AtomsModule,
      MoleculesModule
    ]
})
export class OrganismsModule {}