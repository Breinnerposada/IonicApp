import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCartsComponent } from './details-carts.component';

const routes: Routes = [{ path: '', component: DetailsCartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCartsRoutingModule { }
