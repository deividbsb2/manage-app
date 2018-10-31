import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  appForm: FormGroup;

  constructor(
    public appService: AppService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
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
    this.getApp(+this.route.snapshot.paramMap.get('id'));
  }

  async getApp(id: number) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.appService.getById(id).subscribe(res => {
      this.appForm.reset(res);
      loading.dismiss();
    }, err => {
      loading.dismiss();
      this.presentToast('Erro ao consultar. Tente novamente!');
    });
  }

  async save() {
    await this.appService.put(this.appForm.value, +this.route.snapshot.paramMap.get('id'))
      .subscribe(() => {
        this.router.navigate(['/list-apps']);
      }, (err) => {
        this.presentToast('Erro ao salvar. Tente novamente!');
      }, () => { this.presentToast('Aplicativo atualizado com sucesso!'); });
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
