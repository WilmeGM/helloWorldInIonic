import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiTablePage } from './multi-table.page';

const routes: Routes = [
  {
    path: '',
    component: MultiTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiTablePageRoutingModule {}
