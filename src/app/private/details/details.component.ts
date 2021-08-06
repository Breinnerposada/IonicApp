import { UiService } from './../../services/ui.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { cartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() producto;
  cantidad = 0;
  constructor(
    private carts: cartsService,
    private modalCtrl: ModalController,
    private uiService: UiService
    ) { }

  ngOnInit(): void {
    this.carts.carrito.subscribe((r) => this.cantidad = r.length)
  }

  aggToCarts(item){
    this.uiService.presentLoading()
    setTimeout(() => {
      this.carts.aggProducts(item)
      this.modalCtrl.dismiss()
      this.uiService.alertaInformativa('Producto Agregado Con Exito')
      this.uiService.loading.dismiss()
    },2000)
  }
}
