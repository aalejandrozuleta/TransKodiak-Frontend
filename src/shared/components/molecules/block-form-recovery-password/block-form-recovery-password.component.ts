import { ValuesInputsRecoveryPasswordService } from './../../../../core/services/values-inputs-recovery-password.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonNextRecoveryPasswordComponent } from '@atoms/button-next-recovery-password/button-next-recovery-password.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-form-recovery-password',
  standalone: true,
  imports: [ButtonNextRecoveryPasswordComponent, CommonModule],
  templateUrl: './block-form-recovery-password.component.html',
  styleUrl: './block-form-recovery-password.component.scss'
})
export class BlockFormRecoveryPasswordComponent {

  constructor(
    private valuesInputsRecoveryPasswordService: ValuesInputsRecoveryPasswordService,
    private router: Router
  ) {}
  saveDateRegister() {
    this.valuesInputsRecoveryPasswordService.onClick();
    this.router.navigate(['/forgetPasswordCode']);
  }
}
