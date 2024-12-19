import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'erreserbak',
    loadChildren: () => import('./erreserbak/erreserbak.module').then( m => m.ErreserbakPageModule)
  },
  {
    path: 'zerbitzuak',
    loadChildren: () => import('./zerbitzuak/zerbitzuak.module').then( m => m.ZerbitzuakPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
