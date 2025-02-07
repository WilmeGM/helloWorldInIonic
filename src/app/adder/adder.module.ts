import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdderPageRoutingModule } from './adder-routing.module';

import { AdderPage } from './adder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdderPageRoutingModule
  ],
  declarations: [AdderPage]
})
export class AdderPageModule {}
