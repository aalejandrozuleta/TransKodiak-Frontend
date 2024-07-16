import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFormRegisterIntermediaryComponent } from '@atoms/input-form-register-intermediary/input-form-register-intermediary.component';
import { TittleFormRegisterCompanyComponent } from '@atoms/tittle-form-register-company/tittle-form-register-company.component';

@Component({
  selector: 'app-inputs-form-register-intermediary',
  standalone: true,
  imports: [CommonModule,InputFormRegisterIntermediaryComponent, TittleFormRegisterCompanyComponent],
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
