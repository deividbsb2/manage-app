import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';

import { AppService } from '../shared/app.service';
import { App } from '../shared/app';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  app: App;

  constructor(
    public appService: AppService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getApp();
  }

  async getApp() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.appService.getById(+this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.app = res;
        loading.dismiss();
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao consultar. Tente novamente!');
      });
  }

  async delete(id: number) {
    const loading = await this.loadingController.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.appService.delete(id)
      .subscribe(res => {
        loading.dismiss();
      }, () => {
        loading.dismiss();
        this.presentToast('Erro ao excluir. Tente novamente!');
      }, () => {
        this.presentToast('Aplicativo excluído com sucesso!');
        this.router.navigate(['/list-apps']);
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'Fechar'
    });
    toast.present();
  }

  async confirm(id: number) {
    if (this.app.total_people > 0) {
      const alertBond = await this.alertController.create({
        header: 'Atenção!',
        message: `O <strong>${this.app.name}</strong> não pode ser excluido, pois está vinculado a pessoas!`,
        backdropDismiss: true,
        buttons: [
          {
            text: 'Fechar',
            role: 'cancel',
            cssClass: 'primary',
            handler: () => { }
          }
        ]
      });
      await alertBond.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Atenção!',
        message: `Deseja realmente excluir <strong>${this.app.name}</strong>?`,
        backdropDismiss: true,
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            cssClass: 'primary',
            handler: () => { }
          }, {
            text: 'Sim',
            cssClass: 'danger',
            handler: () => {
              this.delete(id);
            }
          }
        ]
      });
      await alert.present();
    }
  }
}
