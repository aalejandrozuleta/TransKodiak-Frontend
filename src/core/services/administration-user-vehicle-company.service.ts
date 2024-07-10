import { registerVehicle } from './../models/registerVehicle';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';
import { registerCompanies } from '@models/registerCompanies';

@Injectable({
  providedIn: 'root',
})
export class AdministrationUserVehicleCompanyService {
  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {}

// Creacion de vehiculo
  registerVehicleCompany(vehicle: registerVehicle) {
    this.userVehicleCompanyService.createVehicle(vehicle).subscribe(() => {
      console.log('Vehículo registrado');
    });
  }
  
  registerCompanyVehicleUser(user: registerCompanies){
    this.userVehicleCompanyService.createUserVehicleCompany(user).subscribe(() => {
      console.log('Usuario registrado');
    });
  }
}
