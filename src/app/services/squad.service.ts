import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SquadMember } from '../models/squad-member';

@Injectable()
export class SquadService {
  URL: string;

  constructor(protected httpMod: HttpClient) {
    console.log('it is I, the squad service');
    this.URL = 'https://jsonplaceholder.typicode.com/users';
  }
  getSquad() {
    return this.httpMod.get<Array<SquadMember>>(this.URL);
  }
}
