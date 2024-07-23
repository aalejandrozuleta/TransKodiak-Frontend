import { Injectable } from '@angular/core';
import { recoveryPassword } from '@models/recoveryPassword';
import { AdministrationRecoveryPasswordService } from './administration-recovery-password.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesInputsRecoveryPasswordService {

  constructor(
    private administrationRecoveryPasswordService: AdministrationRecoveryPasswordService,
  ) {}

  recoveryUser: recoveryPassword = {
    email: '',
    number: '',
  };
  createUser(field: keyof recoveryPassword, value: string) {
    this.recoveryUser[field] = value;
  }

  onClick() {
    this.administrationRecoveryPasswordService.recoveryPasswords(
      this.recoveryUser,
    );
    console.log(this.recoveryUser);
  }
}
