import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFormRegisterCompanyComponent } from '@atoms/input-form-register-company/input-form-register-company.component';
import { TittleFormRegisterCompanyComponent } from '@atoms/tittle-form-register-company/tittle-form-register-company.component';

@Component({
  selector: 'app-inputs-form-register-company',
  standalone: true,
  imports: [CommonModule, InputFormRegisterCompanyComponent, TittleFormRegisterCompanyComponent],
  templateUrl: './inputs-form-register-company.component.html',
  styleUrl: './inputs-form-register-company.component.scss'
})
export class InputsFormRegisterCompanyComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
}
