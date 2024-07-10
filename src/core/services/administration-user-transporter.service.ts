import { Injectable } from '@angular/core';
import { userTransporterCreate } from './../models/userTransporter';
import { UserVehicleCompanyService } from './user-vehicle-company.service';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';

@Injectable({
  providedIn: 'root'
})
export class AdministrationUserTransporterService {

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {}

  registerUserTransporter(user: userTransporterCreate) {
    this.userVehicleCompanyService.createUserTransporter(user).subscribe(() => {
      console.log('Usuario registrado');
    });
  }

  editUserTransporter(user: editUserVehicleCompany) {
    const existingUser = this.userVehicleCompanyService.getUserById(user.id);

    const updatedUser = { ...existingUser, ...user };

    this.userVehicleCompanyService
      .editUserVehicleCompany(updatedUser)
      .subscribe(() => {
        console.log('Usuario editado');
      });
  }

  deleteUserTransporter(userId: number) {
    this.userVehicleCompanyService.deleteUser(userId).subscribe(() => {
      console.log('Usuario eliminado');
    });
  }
}
