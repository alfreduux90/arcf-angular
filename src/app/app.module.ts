import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MaterialModule } from "./material.module";

import { JwtService } from "./core/services/jwt.service";
import { EMPTY } from "rxjs";

import { AtomsModule } from './shared/components/atoms/atoms.module';
import { MoleculesModule } from './shared/components/molecules/molecules.module';
import { OrganismsModule } from './shared/components/organisms/organisms.module';
import { TemplatesModule } from './shared/components/templates/templates.module';

import { HomepageComponent } from './modules/homepage/homepage.component';

import { NotificationModule } from "./core/services";



export function initAuth(jwtService: JwtService) {
  return () => (jwtService.getToken());
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    NotificationModule.forRoot()

  ],
  providers: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
