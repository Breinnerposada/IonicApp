import { DetailsComponent } from '../details/details.component';
import { cartsService } from '../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products :any[] = [];
  textoBuscar;
  constructor(private product : cartsService, private modalCtrl : ModalController,){ }

  ngOnInit(): void {
    this.products = this.product.getProducts();
  }

 async showDetailsProduct(product){
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      swipeToClose: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      componentProps: {
        producto : product,
      },
    });
    return await modal.present();
  }

  buscar(event){
    const texto = event.target.value
   const filtro =  this.products.filter((r) => {
      r.name.ToLowerCase()
        .includes(texto.ToLowerCase())
    })
    console.log(filtro);
  }

}
