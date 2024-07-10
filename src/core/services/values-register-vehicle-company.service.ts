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
    name: 'alejandro',
    nit: '21424124242',
    address: 'el placer',
    password: 'sfasfsfA/',
    phone: '3218957375',
    email: 'jhoitan266@gmail.com'
  };
  createUser(field: keyof registerCompanies, value: string) {
    console.log('error');

    console.log(field);
    console.log(this.newUser[field] = value);
    this.newUser[field] = value;
    console.log(this.newUser);
  }

  onClick() {
    this.administrationUserVehicleCompanyService.registerCompanyVehicleUser(
      this.newUser,
    );
    console.log(this.newUser);
  }
}
