import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'ngx-avatars';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AvatarCompComponent } from './avatar-comp/avatar-comp.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { LabelComponent } from './label/label.component';
import { ListComponent } from './list/list.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [AvatarCompComponent, ButtonComponent, IconComponent, LabelComponent, ListComponent, RichTextComponent, TextComponent],
  exports: [AvatarCompComponent, ButtonComponent, IconComponent, LabelComponent, ListComponent, RichTextComponent, TextComponent], // Si deseas exportar para uso externo
  imports: [MaterialModule, AvatarModule, AngularEditorModule, FormsModule], 
})
export class AtomsModule {}
