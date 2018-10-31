import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../shared/abstract-service';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends AbstractService<Person> {

  constructor(http: HttpClient) {
    super('people', http);
  }
}
