import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { AppService } from '../shared/app.service';
import { Profile } from '../../person/shared/profile';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  appForm: FormGroup;
  profiles: Profile[] = [];

  constructor(
    public appService: AppService,
    public loadingController: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    this.appForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'bundle_id': [null, Validators.required]
    });
  }

  ngOnInit() {
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
    console.log(this.appForm.value);
    await this.appService.post(this.appForm.value)
      .subscribe(() => {
        this.router.navigate(['/list-apps']);
      }, (err) => {
        this.presentToast('Erro ao salvar. Tente novamente!');
      }, () => {
        this.presentToast('Aplicativo cadastrado com sucesso!');
      });
  }
}
