import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationUserVehicleCompanyService {

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) { }

  deleteUser(userId: number) {
    this.userVehicleCompanyService.deleteUser(userId).subscribe(() => {
      console.log('Usuario eliminado');
    });
  }
  
}