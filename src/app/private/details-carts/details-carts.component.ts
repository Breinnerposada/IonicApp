import { cartsService } from 'src/app/services/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-carts',
  templateUrl: './details-carts.component.html',
  styleUrls: ['./details-carts.component.css']
})
export class DetailsCartsComponent implements OnInit {
  carritos;
  constructor(private cartService: cartsService,) { }

  ngOnInit(): void {
    this.cartService.carritoComprado.subscribe((r) => {
      this.carritos = r
    })
  }

}
