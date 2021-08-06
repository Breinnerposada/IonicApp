import { Component, Input, OnInit } from '@angular/core';
import {cartsService} from '../../services/carts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cantidad = 0;
  textoBuscar;
  @Input() title;
  constructor(private cartService: cartsService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.carrito.subscribe((r) => {
      this.cantidad = r.length
    })
  }

  navigateToCarts(){
    this.router.navigateByUrl('/carts');
  }

  

}
