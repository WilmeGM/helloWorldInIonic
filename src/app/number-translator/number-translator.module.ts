import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumberTranslatorPageRoutingModule } from './number-translator-routing.module';

import { NumberTranslatorPage } from './number-translator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumberTranslatorPageRoutingModule
  ],
  declarations: [NumberTranslatorPage]
})
export class NumberTranslatorPageModule {}
