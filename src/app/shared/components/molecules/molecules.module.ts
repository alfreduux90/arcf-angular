import { NgModule } from "@angular/core";
import { NgStyle } from "@angular/common";
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { MenuItemComponent} from './menu-item/menu-item.component';
import { AvatarContainerComponent } from "./avatar-container/avatar-container.component";
import { FormComponent } from "./form/form.component";
import { ListContainerComponent } from "./list-container/list-container.component";
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AtomsModule } from "../atoms/atoms.module";


@NgModule({
  declarations: [
    MenuItemComponent,
    AvatarContainerComponent,
    HeaderMenuComponent,
    FormComponent,
    ListContainerComponent,
  ],
  exports: [
    MenuItemComponent,
    AvatarContainerComponent,
    HeaderMenuComponent,
    FormComponent,
    ListContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AtomsModule
    ],
})
export class MoleculesModule {}
