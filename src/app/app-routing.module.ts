import { inject, NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { UserService } from "./core/services/user.service";
import { map } from "rxjs/operators";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: () => import('./shared/components/pages/static/static.module').then(m=>m.StaticModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/static/welcome',
      }
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./shared/components/pages/homepage/homepage.component').then(m => ({default: m.HomepageComponent})),
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.component').then(m => ({default: m.AuthComponent})),
    canActivate: [
      () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: 'register',
    loadChildren: () => import('./core/auth/auth.component').then(m => ({default: m.AuthComponent})),
    canActivate: [
      () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.component').then(m => ({default: m.SettingsComponent})),
    canActivate: [
      () => inject(UserService).isAuthenticated
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/static/404',
  },
]
    
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
