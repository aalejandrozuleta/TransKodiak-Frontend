import { authUser } from './../models/authUser';
import { Injectable } from '@angular/core';
import { AdministrationAuthCompaniesService } from './administration-auth-companies.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesAuthCompaniesService {

  constructor(
    private AdministrationAuthCompaniesService: AdministrationAuthCompaniesService,
  ) {}

  auth: authUser = {
    password: '',
    email: ''
  };
  
  authUser(field: keyof authUser, value: string) {
    this.auth[field] = value;
  }

  onClick() {
    this.AdministrationAuthCompaniesService.authUser(
      this.auth,
    );
  }
}
