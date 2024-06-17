import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';


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

  registerVehicleCompany(vehicle:registerVehicle){
    this.userVehicleCompanyService.createVehicle(vehicle).subscribe(() => {
      console.log('Vehículo registrado');
    });
  }
}
