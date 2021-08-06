import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
