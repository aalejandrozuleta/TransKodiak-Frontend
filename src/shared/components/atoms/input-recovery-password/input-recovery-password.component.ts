import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { recoveryPassword } from '@models/recoveryPassword';
import { ValuesInputsRecoveryPasswordService } from '@services/values-inputs-recovery-password.service';

@Component({
  selector: 'app-input-recovery-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './input-recovery-password.component.html',
  styleUrl: './input-recovery-password.component.scss'
})
export class InputRecoveryPasswordComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  value: string = '';

  constructor (private valuesInputsRecoveryPasswordService:ValuesInputsRecoveryPasswordService){}

  onChange1() {  
    console.log(this.fild);
    this.valuesInputsRecoveryPasswordService.createUser(
      this.fild as keyof recoveryPassword,
       this.value); 
  }
}
