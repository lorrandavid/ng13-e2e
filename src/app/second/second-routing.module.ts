import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
