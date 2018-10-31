import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../shared/abstract-service';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends AbstractService<Profile> {

  constructor(public http: HttpClient) {
    super('profiles', http);
  }
}
