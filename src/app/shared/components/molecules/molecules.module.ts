import { NgModule } from "@angular/core";
import { NgStyle } from "@angular/common";
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';

import { AvatarContainerComponent } from "./avatar-container/avatar-container.component";
import { FormComponent } from "./form/form.component";
import { IconContainerComponent } from "./icon-container/icon-container.component";
import { LabelContainerComponent } from "./label-container/label-container.component";
import { ListContainerComponent } from "./list-container/list-container.component";
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AtomsModule } from "../atoms/atoms.module";

@NgModule({
  declarations: [
    AvatarContainerComponent,
    HeaderMenuComponent,
    FormComponent,
    IconContainerComponent,
    LabelContainerComponent,
    ListContainerComponent,
  ],
  exports: [
    AvatarContainerComponent,
    HeaderMenuComponent,
    FormComponent,
    IconContainerComponent,
    LabelContainerComponent,
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
