import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormOrganismComponent } from './form-organism/form-organism.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';


@NgModule({
    declarations: [FooterComponent, HeaderComponent, FormOrganismComponent],
    exports: [FooterComponent, HeaderComponent, FormOrganismComponent],
    imports: [MoleculesModule, MaterialModule, AtomsModule, ReactiveFormsModule]
})
export class OrganismsModule {}