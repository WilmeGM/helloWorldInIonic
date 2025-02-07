import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberTranslatorPage } from './number-translator.page';

const routes: Routes = [
  {
    path: '',
    component: NumberTranslatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberTranslatorPageRoutingModule {}
