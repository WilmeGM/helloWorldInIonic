import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdderPage } from './adder.page';

const routes: Routes = [
  {
    path: '',
    component: AdderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdderPageRoutingModule {}
