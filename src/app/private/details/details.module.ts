import { HeaderModule } from './../../shared/header/header.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule,
    DetailsRoutingModule,
  ]
})
export class DetailsModule { }
