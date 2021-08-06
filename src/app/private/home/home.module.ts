import { DetailsCartsModule } from './../details-carts/details-carts.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HeaderModule } from './../../shared/header/header.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SuperTabsModule,
    HomeRoutingModule,
    DetailsCartsModule,
    HeaderModule
  ]
})
export class HomeModule { }
