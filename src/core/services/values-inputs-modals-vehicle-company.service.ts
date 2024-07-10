import { userTransporterCreate } from '@models/userTransporter';
import { Injectable } from '@angular/core';
import { AdministrationUserTransporterService } from './administration-user-transporter.service';

@Injectable({
  providedIn: 'root',
})
export class ValuesInputsModalsVehicleCompanyService {
  constructor(
    private AdministrationUserTransporterService:AdministrationUserTransporterService,
  ) {}

  newUser: userTransporterCreate = {
    name: '',
    email: '',
    phone: '',
    license: '',
  };
  createUser(field: keyof userTransporterCreate, value: string) {
    this.newUser[field] = value;
    console.log(this.newUser);
  }

  onClick() {
    this.AdministrationUserTransporterService.registerUserTransporter(
      this.newUser,
    );
  }
}
