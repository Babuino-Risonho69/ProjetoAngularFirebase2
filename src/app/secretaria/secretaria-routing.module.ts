import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretariaPage } from './secretaria.page';

const routes: Routes = [
  {
    path: '',
    component: SecretariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretariaPageRoutingModule {}
