import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImgFormRegisterCompanyComponent } from '@atoms/img-form-register-company/img-form-register-company.component';
import { InputFormRegisterCompanyComponent } from '@atoms/input-form-register-company/input-form-register-company.component';
import { InputsFormRegisterCompanyComponent } from '@molecules/inputs-form-register-company/inputs-form-register-company.component';
import { GroupFormRegisterIntermediaryComponent } from '@organisms/group-form-register-intermediary/group-form-register-intermediary.component';

@Component({
  selector: 'app-register-intermediary',
  standalone: true,
  imports: [CommonModule, InputFormRegisterCompanyComponent, ImgFormRegisterCompanyComponent, GroupFormRegisterIntermediaryComponent, InputsFormRegisterCompanyComponent],
  templateUrl: './register-intermediary.component.html',
  styleUrl: './register-intermediary.component.scss'
})
export class RegisterIntermediaryComponent {

}
