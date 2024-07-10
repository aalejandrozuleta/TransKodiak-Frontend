import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFormRegisterCompanyComponent } from '@atoms/input-form-register-company/input-form-register-company.component';
import { TittleFormRegisterCompanyComponent } from '@atoms/tittle-form-register-company/tittle-form-register-company.component';

@Component({
  selector: 'app-inputs-form-register-intermediary',
  standalone: true,
  imports: [CommonModule, InputFormRegisterCompanyComponent, TittleFormRegisterCompanyComponent],
  templateUrl: './inputs-form-register-intermediary.component.html',
  styleUrl: './inputs-form-register-intermediary.component.scss'
})
export class InputsFormRegisterIntermediaryComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
}
