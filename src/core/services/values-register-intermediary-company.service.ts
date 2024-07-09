import { Injectable } from '@angular/core';
import { AdministrationUserVehicleCompanyService } from './administration-user-vehicle-company.service';
import { registerCompanies } from '../models/registerCompanies';

@Injectable({
  providedIn: 'root'
})
export class ValuesRegisterIntermediaryCompanyService {

  constructor(
    private administrationUserVehicleCompanyService: AdministrationUserVehicleCompanyService,
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
    this.administrationUserVehicleCompanyService.registerCompanyIntermediary(
      this.newUser,
    );
  }
}
