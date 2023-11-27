import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamePageRoutingModule } from './reclame-routing.module';

import { ReclamePage } from './reclame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamePageRoutingModule
  ],
  declarations: [ReclamePage]
})
export class ReclamePageModule {}
