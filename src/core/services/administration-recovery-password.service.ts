import { recoveryPassword } from './../models/recoveryPassword';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationRecoveryPasswordService {

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {}

  // Recovery Password (email-number)
    recoveryPasswords(user: recoveryPassword){
      this.userVehicleCompanyService.recoveryPasswords(user).subscribe(() => {
      console.log('envio exitoso');
       });
    }

    recoveryPasswordsCode(user: recoveryPassword){
      this.userVehicleCompanyService. recoveryPasswordsCode(user).subscribe(() => {
        console.log("recuperacion exitosa");
        });
    }

}
