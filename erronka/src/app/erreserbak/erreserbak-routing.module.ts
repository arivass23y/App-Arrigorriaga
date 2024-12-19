import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErreserbakPage } from './erreserbak.page';

const routes: Routes = [
  {
    path: '',
    component: ErreserbakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErreserbakPageRoutingModule {}
