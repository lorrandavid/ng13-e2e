import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondComponent } from './second.component';
import { SecondRoutingModule } from './second-routing.module';

@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
