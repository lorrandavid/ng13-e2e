import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then(m => m.ThirdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
