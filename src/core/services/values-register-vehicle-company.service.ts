import { registerCompanies } from './../models/registerCompanies';
import { Injectable } from '@angular/core';
import { AdministrationUserVehicleCompanyService } from './administration-user-vehicle-company.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesRegisterVehicleCompanyService {

  constructor(
    private administrationUserVehicleCompanyService: AdministrationUserVehicleCompanyService,
  ) {}

  newUser: registerCompanies = {
    name: '',
    nit: '',
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
    this.administrationUserVehicleCompanyService.registerCompanyVehicleUser(
      this.newUser,
    );
  }
}
