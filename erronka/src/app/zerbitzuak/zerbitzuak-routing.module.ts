import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZerbitzuakPage } from './zerbitzuak.page';

const routes: Routes = [
  {
    path: '',
    component: ZerbitzuakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZerbitzuakPageRoutingModule {}
