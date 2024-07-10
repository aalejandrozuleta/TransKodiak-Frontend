import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerCompanies } from '@models/registerCompanies';
import { ValuesRegisterVehicleCompanyService } from '@services/values-register-vehicle-company.service';

@Component({
  selector: 'app-input-form-register-company',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './input-form-register-company.component.html',
  styleUrl: './input-form-register-company.component.scss'
})
export class InputFormRegisterCompanyComponent {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  value: string = '';

  constructor (private ValuesRegisterVehicleCompanyService:ValuesRegisterVehicleCompanyService){}

  onChange() {  
    this.ValuesRegisterVehicleCompanyService.createUser(
      this.fild as keyof registerCompanies,
       this.value);
  }
}
