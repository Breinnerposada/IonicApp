import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cartsService {
  @Output() carrito: EventEmitter<any> = new EventEmitter<any>() ;
  @Output() carritoComprado: EventEmitter<any> = new EventEmitter<any>() ;
  carritoProductos = [];
  products = 
  [
    {
      id: '4612981',
      type: 'Comidas Rapidas',
      name: 'Combo Gyro Papas Bebida',
      precio: 30000,
      description: 'Combo Gyro con proteína a elección, salsa, acompaña con gaseosa y papas griegas.',
      img_url: 'https://images.rappi.com/products/2090111387-1605128655666.png?d=400x400&e=webp',
      score: 5
    },
    {
      id: '145872',
      type: 'Comidas Rapidas',
      name: 'Pizza con piña',
      precio: 25000,
      description: 'Masa tradicional, salsa especial, queso mozzarella, jamón, pepperoni, salami y cebolla.',
      img_url: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      score: 4
    },
    {
      type: 'Comidas Rapidas',
      id: '4612971',
      name: 'Pizza Personal Gourmet Americana + Bebida 250 ml',
      precio: 30000,
      description: 'La Pizza 🍕🍕 también puede ser Gourmet. Prueba nuestra Irresistible Pizza Gourmet Americana +  Coca Cola 250 ml.',
      img_url: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/b5532459-8c96-40ff-a058-f3e75c034a6e/202104051619_sy9h_.jpeg',
      score: 5
    },
    {
      type: 'Postres',
      id: '4612981',
      name: 'Bowi Griego',
      precio: 30000,
      description: 'Delicioso Bowi Griego.',
      img_url: 'https://images.rappi.com/products/2089998166-1574256524832.png?d=400x400&e=webp',
      score: 5
    },
    {
      type: 'Comidas Tipica',
      id: '46129',
      name: 'Plato Kebab de Res',
      precio: 12000,
      description: 'Res, acompañamiento a elección, salsa tzatziki y pan.',
      img_url: 'https://images.rappi.com/products/2092582275-1605128691594.png?d=400x400&e=webp',
      score: 5
    },

  ]
  constructor() { }


  buyCarts(carrito) {
    this.carritoComprado.emit(carrito)
   return  this.carritoProductos = [];
  }

  aggProducts(producto){
    this.carritoProductos.push(...[producto]);
    this.carrito.emit(this.carritoProductos);
  }

  getCarritoProducto(){
    return this.carritoProductos;
  }

  deleteProducto(producto){
    const index = this.carritoProductos.findIndex((e) => e.id === producto.id)
    this.carritoProductos.splice(index,1)
    return this.getCarritoProducto()
  }

  getProducts(productos = this.products){
    return productos
  }

  deleteCart(){
    return this.carritoProductos = []
  }
}
