import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

import { PersonService } from '../shared/person.service';
import { Person } from '../shared/person';
import { AppService } from '../../apps/shared/app.service';
import { App } from '../../apps/shared/app';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  person: Person;
  apps: App[] = [];

  constructor(
    public personService: PersonService,
    public appService: AppService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getPerson();
    this.getApps();
  }

  async getPerson() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.personService.getById(+this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.person = res;
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
    await this.personService.delete(id)
      .subscribe(res => {
        loading.dismiss();
        this.router.navigate(['/list-people']);
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao excluir. Tente novamente!');
      }, () => {
        this.presentToast('Pessoa excluída com sucesso!');
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
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: `Deseja realmente excluir <strong>${this.person.name}</strong>?`,
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

  async getApps() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.appService.getAll()
      .subscribe(res => {
        this.apps = res;
        loading.dismiss();
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao consultar. Tente novamente!');
      });
  }
}
