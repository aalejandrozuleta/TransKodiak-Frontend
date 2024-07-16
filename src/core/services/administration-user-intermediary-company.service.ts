import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';
import { registerCompanies } from '@models/registerCompanies';

@Injectable({
  providedIn: 'root'
})

export class AdministrationUserIntermediaryCompanyService {

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {}

  registerIntermediaryUser(user: registerCompanies){
    this.userVehicleCompanyService.createUserIntermediaryCompany(user).subscribe(() => {
      console.log('Usuario registrado');
    });
  }
  
}
