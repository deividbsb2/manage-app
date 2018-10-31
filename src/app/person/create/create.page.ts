import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { PersonService } from '../shared/person.service';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/profile';
import { App } from '../../apps/shared/app';
import { AppService } from '../../apps/shared/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  personForm: FormGroup;
  profiles: Profile[] = [];
  apps: App[] = [];

  constructor(
    public personService: PersonService,
    public profileService: ProfileService,
    public appService: AppService,
    public loadingController: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    this.personForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'cpf': [null, Validators.required],
      'rg': [null, Validators.required],
      'birthday': [null, Validators.required],
      'profile_id': [null, Validators.required],
      'apps': [null]
    });
  }

  ngOnInit() {
    this.getProfiles();
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

  async getProfiles() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.profileService.getAll()
      .subscribe(res => {
        this.profiles = res;
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

  async save() {
    await this.personService.post(this.personForm.value)
      .subscribe(res => {
        this.router.navigate(['/detail-person/' + res.id]);
      }, (err) => {
        this.presentToast('Erro ao salvar. Tente novamente!');
      }, () => {
        this.presentToast('Pessoa cadastrada com sucesso!');
      });
  }
}
