import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImgFormRegisterCompanyComponent } from '@atoms/img-form-register-company/img-form-register-company.component';
import { InputFormRegisterCompanyComponent } from '@atoms/input-form-register-company/input-form-register-company.component';
import { InputsFormRegisterCompanyComponent } from '@molecules/inputs-form-register-company/inputs-form-register-company.component';
import { GroupFormRegisterCompanyComponent } from '@organisms/group-form-register-company/group-form-register-company.component';


@Component({
  selector: 'app-register-form-company',
  standalone: true,
  imports: [CommonModule, GroupFormRegisterCompanyComponent, InputFormRegisterCompanyComponent, ImgFormRegisterCompanyComponent, GroupFormRegisterCompanyComponent, InputsFormRegisterCompanyComponent],
  templateUrl: './register-form-company.component.html',
  styleUrl: './register-form-company.component.scss'
})
export class RegisterFormCompanyComponent {

}
