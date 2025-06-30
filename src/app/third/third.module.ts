import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThirdComponent } from './third.component';
import { ThirdRoutingModule } from './third-routing.module';

@NgModule({
  declarations: [
    ThirdComponent
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ]
})
export class ThirdModule { }
