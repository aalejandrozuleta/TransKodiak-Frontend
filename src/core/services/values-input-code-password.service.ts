import { Injectable } from '@angular/core';
import { recoveryPassword } from '@models/recoveryPassword';
import { AdministrationRecoveryPasswordService } from './administration-recovery-password.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesInputCodePasswordService {

  constructor(
    private administrationRecoveryPasswordService: AdministrationRecoveryPasswordService,
  ) {}

  recoveryUserCode: recoveryPassword = {
    email: '',
    code: '',
  };
  createUser(field: keyof recoveryPassword, value: string) {
    this.recoveryUserCode[field] = value;
  }

  onClick() {
    this.administrationRecoveryPasswordService.recoveryPasswordsCode(
      this.recoveryUserCode,
    );
    console.log(this.recoveryUserCode);
  }
}
