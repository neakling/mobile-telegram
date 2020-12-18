import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecnpagePage } from './secnpage.page';

const routes: Routes = [
  {
    path: '',
    component: SecnpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecnpagePageRoutingModule {}
