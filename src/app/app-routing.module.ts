import { inject, NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { map } from "rxjs/operators";

const routes: Routes = [
  {

    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./shared/components/pages/auth/auth.module').then(m=>m.AuthModule)
      },
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
    loadChildren: () => import('./modules/homepage/homepage.component').then(m => ({default: m.HomepageComponent})),
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
