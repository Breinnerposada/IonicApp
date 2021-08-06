import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCartsRoutingModule } from './details-carts-routing.module';
import { DetailsCartsComponent } from './details-carts.component';


@NgModule({
  declarations: [
    DetailsCartsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DetailsCartsRoutingModule
  ],
  exports: [DetailsCartsComponent]
})
export class DetailsCartsModule { }
