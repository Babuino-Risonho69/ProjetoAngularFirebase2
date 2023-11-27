import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretariaPageRoutingModule } from './secretaria-routing.module';

import { SecretariaPage } from './secretaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretariaPageRoutingModule
  ],
  declarations: [SecretariaPage]
})
export class SecretariaPageModule {}
