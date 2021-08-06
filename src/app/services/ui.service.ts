import { Injectable } from "@angular/core";
import {
  AlertController,
  ToastController,
  LoadingController,
  ActionSheetController,
} from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UiService {
  loading: any;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    public actionSheetController: ActionSheetController
  ) {}

  async alertaInformativa(message: string) {
    const alert = await this.alertController.create({
      cssClass: "buttoncss",
      header: "Accion Realizada Con Exito",
      subHeader: "",
      message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async alertConfirm(header: string, message: string, backdrop = true) {
    let respuesta = null;

    const alertConfirm = await this.alertController.create({
      header,
      message,
      backdropDismiss: backdrop,
      mode: "ios",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: () => (respuesta = false),
        },
        {
          text: "Aceptar",
          handler: () => (respuesta = true),
        },
      ],
    });

    await alertConfirm.present();

    await alertConfirm.onDidDismiss();

    return new Promise((resolve) => {
      resolve(respuesta);
    });
  }

  async presentLoading(message: string = "Cargando información...") {
    this.loading = await this.loadingController.create({
      message,
      mode: "ios",
      animated: true,
      spinner: "bubbles",
      translucent: true,
      backdropDismiss: false,
    });

    await this.loading.present();
  }

  async alertaError(message: string) {
    const alert = await this.alertController.create({
      header: "Error",
      subHeader: "",
      message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async alertaWarning(message: string) {
    const alert = await this.alertController.create({
      header: "Warning",
      subHeader: "",
      message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async presentToast(
    message: string = "Toast Bottom",
    color = "secondary",
    duration = 5000
  ) {
    const toast = await this.toastController.create({
      color,
      mode: "ios",
      animated: true,
      message,
      position: "top",
      duration,
    });
    await toast.present();
  }

  async presentToastBottom(
    message: string = "Toast Bottom",
    color = "mediumCeler",
    duration = 4000
  ) {
    const toast = await this.toastController.create({
      color,
      mode: "ios",
      animated: true,
      message,
      position: "bottom",
      duration,
    });
    await toast.present();
  }

  async actionSheetDescartarCambios() {
    let respuesta = null;

    const actionSheet = await this.actionSheetController.create({
      header: "¿Quiere salir sin guardar los cambios realizados?",
      animated: true,
      translucent: true,
      mode: "md",
      cssClass: "--color",
      buttons: [
        {
          text: "Descartar cambios",
          role: "destructive",
          icon: "trash",
          handler: () => (respuesta = true),
        },
        {
          text: "Seguir Editando",
          icon: "checkmark",
          role: "cancel",
          handler: () => (respuesta = false),
        },
      ],
    });

    await actionSheet.present();

    await actionSheet.onDidDismiss();

    return new Promise((resolve) => {
      resolve(respuesta);
    });
  }

  async alertPrompt(
    header: string = "Titulo",
    subHeader: string = "Subtitulo",
    value: string
  ) {
    let respuesta = null;
    const alertPrompt = await this.alertController.create({
      header,
      subHeader,
      backdropDismiss: false,
      inputs: [
        {
          name: "Observacion",
          id: "observacion",
          type: "textarea",
          placeholder: "Observación",
          value,
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            respuesta = false;
          },
        },
        {
          text: "Ok",
          handler: (id) => {
            respuesta = id;
          },
        },
      ],
    });

    await alertPrompt.present();

    await alertPrompt.onDidDismiss();

    return new Promise((resolve) => {
      resolve(respuesta);
    });
  }

}
