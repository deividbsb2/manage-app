import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AppService } from '../shared/app.service';
import { App } from '../shared/app';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  apps: App[] = [];

  constructor(
    public appService: AppService,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getApps();
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

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'Fechar'
    });
    toast.present();
  }
}
