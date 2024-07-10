import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerCompanies } from '@models/registerCompanies';
import { ValuesRegisterIntermediaryCompanyService } from '@services/values-register-intermediary-company.service';

@Component({
  selector: 'app-input-form-register-intermediary',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './input-form-register-intermediary.component.html',
  styleUrl: './input-form-register-intermediary.component.scss'
})
export class InputFormRegisterIntermediaryComponent {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  value: string = '';

  constructor (private ValuesRegisterIntermediaryCompanyService:ValuesRegisterIntermediaryCompanyService){}

  onChange() {  
    this.ValuesRegisterIntermediaryCompanyService.createUser(
      this.fild as keyof registerCompanies,
       this.value);
  }
}

