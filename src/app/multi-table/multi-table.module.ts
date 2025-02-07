import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiTablePageRoutingModule } from './multi-table-routing.module';

import { MultiTablePage } from './multi-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiTablePageRoutingModule
  ],
  declarations: [MultiTablePage]
})
export class MultiTablePageModule {}
