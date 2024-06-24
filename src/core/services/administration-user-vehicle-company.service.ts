import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';

@Injectable({
  providedIn: 'root',
})
export class AdministrationUserVehicleCompanyService {
  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {}

  deleteUser(userId: number) {
    this.userVehicleCompanyService.deleteUser(userId).subscribe(() => {
      console.log('Usuario eliminado');
    });
  }

  registerTransporter(user: userTransporterCreate) {
    this.userVehicleCompanyService.createUserTransporter(user).subscribe(() => {
      console.log('Usuario registrado');
    });
  }

  registerVehicleCompany(vehicle: registerVehicle) {
    this.userVehicleCompanyService.createVehicle(vehicle).subscribe(() => {
      console.log('Vehículo registrado');
    });
  }

  editUserVehicleCompany(user: editUserVehicleCompany) {
    const existingUser = this.userVehicleCompanyService.getUserById(user.id);

    const updatedUser = { ...existingUser, ...user };

    this.userVehicleCompanyService
      .editUserVehicleCompany(updatedUser)
      .subscribe(() => {
        console.log('Usuario editado');
      });
  }
}
