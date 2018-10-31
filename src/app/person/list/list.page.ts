import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

import { PersonService } from '../shared/person.service';
import { Person } from '../shared/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  people: Person[] = [];

  constructor(
    public personService: PersonService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  async getPeople() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.personService.getAll()
      .subscribe(res => {
        this.people = res;
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
