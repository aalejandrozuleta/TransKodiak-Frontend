import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonFormRegisterCompanyComponent } from '@atoms/button-form-register-company/button-form-register-company.component';
import { TextFormRegisterCompanyComponent } from '@atoms/text-form-register-company/text-form-register-company.component';
import { ValuesRegisterIntermediaryCompanyService } from '@services/values-register-intermediary-company.service';

@Component({
  selector: 'app-buttons-form-register-intermediary',
  standalone: true,
  imports: [ButtonFormRegisterCompanyComponent, CommonModule, TextFormRegisterCompanyComponent],
  templateUrl: './buttons-form-register-intermediary.component.html',
  styleUrl: './buttons-form-register-intermediary.component.scss'
})
export class ButtonsFormRegisterIntermediaryComponent {

  constructor(
    private ValuesRegisterIntermediaryCompanyService:ValuesRegisterIntermediaryCompanyService,
  ) {}
  saveDateRegister() {
    this.ValuesRegisterIntermediaryCompanyService.onClick();
  }
}
