import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonFormRegisterCompanyComponent } from '@atoms/button-form-register-company/button-form-register-company.component';
import { TextFormRegisterCompanyComponent } from '@atoms/text-form-register-company/text-form-register-company.component';
import { ValuesRegisterVehicleCompanyService } from '@services/values-register-vehicle-company.service';

@Component({
  selector: 'app-buttons-form-register-company',
  standalone: true,
  imports: [ButtonFormRegisterCompanyComponent, CommonModule, TextFormRegisterCompanyComponent],
  templateUrl: './buttons-form-register-company.component.html',
  styleUrl: './buttons-form-register-company.component.scss'
})
export class ButtonsFormRegisterCompanyComponent {

  constructor(
    private ValuesRegisterVehicleCompanyService: ValuesRegisterVehicleCompanyService,
  ) {}
  saveDateRegister() {
    this.ValuesRegisterVehicleCompanyService.onClick();
    console.log("hola perra");
  }
}
