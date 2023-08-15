import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from "./material.module";

import { JwtService } from "./core/services/jwt.service";
import { UserService } from "./core/services/user.service";
import { EMPTY } from "rxjs";

import { AtomsModule } from './shared/components/atoms/atoms.module';
import { MoleculesModule } from './shared/components/molecules/molecules.module';
import { OrganismsModule } from './shared/components/organisms/organisms.module';
import { TemplatesModule } from './shared/components/templates/templates.module';

export function initAuth(jwtService: JwtService, userService: UserService) {
  return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
