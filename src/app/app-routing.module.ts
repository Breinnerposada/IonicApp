import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
    import('./private/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'details', 
    loadChildren: () => 
    import('./private/details/details.module').then(m => m.DetailsModule) 
},
  
  {
    path: 'carts', 
    loadChildren: () => 
    import('./private/carts/carts.module').then(m => m.CartsModule) 

  },
  { path: 'header', loadChildren: () => import('./shared/header/header.module').then(m => m.HeaderModule) },
  { path: 'details-carts', loadChildren: () => import('./private/details-carts/details-carts.module').then(m => m.DetailsCartsModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
