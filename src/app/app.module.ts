import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SuperTabsModule } from "@ionic-super-tabs/angular";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomSanatizerPipe } from './pipes/dom-sanatizer.pipe';

@NgModule({
  declarations: [AppComponent, DomSanatizerPipe],
  entryComponents: [],
    imports: [BrowserModule,  SuperTabsModule.forRoot(), IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
