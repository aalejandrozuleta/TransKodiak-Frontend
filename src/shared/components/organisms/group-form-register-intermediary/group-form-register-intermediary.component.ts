import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImgFormRegisterCompanyComponent } from '@atoms/img-form-register-company/img-form-register-company.component';
import { ButtonsFormRegisterCompanyComponent } from '@molecules/buttons-form-register-company/buttons-form-register-company.component';
import { InputsFormRegisterCompanyComponent } from '@molecules/inputs-form-register-company/inputs-form-register-company.component';
import { userRegister } from '@models/userRegister';
import { TextFormRegisterCompanyComponent } from '@atoms/text-form-register-company/text-form-register-company.component';
import { TitleFormRegisterIntermediaryComponent } from '@atoms/title-form-register-intermediary/title-form-register-intermediary.component';


@Component({
  selector: 'app-group-form-register-intermediary',
  standalone: true,
  imports: [CommonModule, 
    ImgFormRegisterCompanyComponent,
    ButtonsFormRegisterCompanyComponent,
    InputsFormRegisterCompanyComponent,
    TitleFormRegisterIntermediaryComponent,
    TextFormRegisterCompanyComponent
  ],
  templateUrl: './group-form-register-intermediary.component.html',
  styleUrl: './group-form-register-intermediary.component.scss'
})
export class GroupFormRegisterIntermediaryComponent {
  dataform2: userRegister[] = [
    {
      label: 'Nombre',
      id: 'name',
      type: 'text',
      placeholder: 'Nombre',
      fild: 'name'
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      placeholder: 'Email',
      fild: 'email'
    },
    {
      label: 'telefono',
      id: 'phone',
      type: 'text',
      placeholder: 'Telefono',
      fild: 'phone'
    },
    {
      label: 'direccion',
      id: 'address',
      type: 'text',
      placeholder: 'Direccion',
      fild: 'address'
    },
    {
      label: 'contraseña',
      id: 'password',
      type: 'text',
      placeholder: 'Contraseña',
      fild: 'password' 
    },
  ];
}
