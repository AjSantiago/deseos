import { Component } from '@angular/core';
import { Lista } from '../../models';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.page.html',
})
export class PendientesPage {
  lista: Lista;
  nuevaLista: any;

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'nuevaLista',
          type: 'text',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            if (value.length === 0) {
              return;
            }
            this.nuevaLista = Object.values(value);

            //this.router.navigate(['agregar', this.nuevaLista]);
            this.router.navigate(['agregar'], {
              queryParams: { titulo: this.nuevaLista },
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
