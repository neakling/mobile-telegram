import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecnpagePageRoutingModule } from './secnpage-routing.module';

import { SecnpagePage } from './secnpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecnpagePageRoutingModule
  ],
  declarations: [SecnpagePage]
})
export class SecnpagePageModule { }
