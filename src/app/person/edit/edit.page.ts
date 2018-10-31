import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonService } from '../shared/person.service';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/profile';
import { AppService } from '../../apps/shared/app.service';
import { App } from '../../apps/shared/app';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  personForm: FormGroup;
  profiles: Profile[] = [];
  apps: App[] = [];

  constructor(
    public personService: PersonService,
    public profileService: ProfileService,
    public appService: AppService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
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
    this.getPerson(+this.route.snapshot.paramMap.get('id'));
    this.getProfiles();
    this.getApps();
  }

  async getPerson(id: number) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.personService.getById(id).subscribe(res => {
      this.personForm.reset(res);
      const appsIds = [];
      res.apps.forEach(ap => {
        appsIds.push(ap.id);
      });
      this.personForm.get('apps').setValue(appsIds);
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

  async save() {
    await this.personService.put(this.personForm.value, +this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.router.navigate(['/list-people']);
      }, (err) => {
        this.presentToast('Erro ao salvar. Tente novamente!');
      }, () => { this.presentToast('Pessoa atualizada com sucesso!'); });
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
