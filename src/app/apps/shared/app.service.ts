import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../shared/abstract-service';
import { App } from './app';

@Injectable({
  providedIn: 'root'
})
export class AppService extends AbstractService<App> {

  constructor(public http: HttpClient) {
    super('apps', http);
  }
}
