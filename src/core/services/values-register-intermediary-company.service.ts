import { Injectable } from '@angular/core';
import { registerCompanies } from '../models/registerCompanies';
import { AdministrationUserIntermediaryCompanyService } from './administration-user-intermediary-company.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesRegisterIntermediaryCompanyService {

  constructor(
    private AdministrationUserIntermediaryCompanyService:AdministrationUserIntermediaryCompanyService,
  ) {}

  newUser: registerCompanies = {
    name: '',
    address: '',
    password: '',
    phone: '',
    email: ''
  };
  createUser(field: keyof registerCompanies, value: string) {
    this.newUser[field] = value;
    console.log(this.newUser);
  }

  onClick() {
    this.AdministrationUserIntermediaryCompanyService.registerCompanyVehicleUser(
      this.newUser,
    );
  }
}
