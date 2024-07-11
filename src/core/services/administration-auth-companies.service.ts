import { authUser } from './../models/authUser';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';



@Injectable({
  providedIn: 'root'
})
export class AdministrationAuthCompaniesService {

  constructor(private UserVehicleCompanyService: UserVehicleCompanyService) {}

  authUser(user: authUser ) {
    this.UserVehicleCompanyService.authUser(user).subscribe(() => {
      console.log('ingreso exitoso');
      console.log(user);
    });
  }

}
