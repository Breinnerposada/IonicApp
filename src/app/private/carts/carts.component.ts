import { ModalController } from '@ionic/angular';
import { UiService } from './../../services/ui.service';
import { Router } from '@angular/router';
import { cartsService } from 'src/app/services/carts.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  carrito = [];
  precioTotal = 0;
  constructor(
    private carritoService: cartsService, 
    private router: Router,
    private uiService: UiService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit(): void {
    this.getProductos();

    if(this.carrito.length === 0 ){
      console.log('aca');
      setTimeout(() => {
      this.router.navigateByUrl('')
      },1000
      )
    }
    this.calculatePriceSum();
  }
  getProductos(){
    this.carrito = this.carritoService.getCarritoProducto();
  }

  async deleteProduct(producto){
   const resp =  await this.uiService.alertConfirm('Alerta','Esta Seguro de eliminar este producto?')
    if(resp){
      this.carritoService.deleteProducto(producto);
      this.calculatePriceRes();
    }
  }

  navigateTohome(){
    this.router.navigateByUrl('')
    this.carritoService.carrito.emit(this.carrito)
  }

  async deleteCart(){
    const resp = await this.uiService.alertConfirm('Alerta','Esta Seguro de eliminar el carrito?')
    if (resp){
      const currentCart = this.carritoService.deleteCart();
      this.carrito = currentCart
      this.calculatePriceRes();
    }
  }

  calculatePriceSum(){
    this.carrito.forEach((r) => {
      this.precioTotal += r.precio
    })
  }
  calculatePriceRes(){
    this.carrito.forEach((r) => {
      this.precioTotal -= r.precio
    })
    if(this.carrito.length === 0){
      this.precioTotal = 0
    }
  }

  shoppingCart(){
    this.uiService.presentLoading()
    setTimeout(() => {
      this.carritoService.buyCarts(this.carrito)
      this.uiService.alertaInformativa('ORDEN COMPRADA CON EXITO')
      this.carrito = [];
      this.precioTotal = 0
      this.router.navigateByUrl('')
      this.carritoService.carrito.emit(this.carrito)
      this.uiService.loading.dismiss();
    },2000)
  }


}
