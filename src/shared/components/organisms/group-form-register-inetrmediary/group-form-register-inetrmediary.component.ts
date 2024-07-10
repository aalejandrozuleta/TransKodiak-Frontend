import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImgFormRegisterCompanyComponent } from '@atoms/img-form-register-company/img-form-register-company.component';
import { ButtonsFormRegisterCompanyComponent } from '@molecules/buttons-form-register-company/buttons-form-register-company.component';
import { InputsFormRegisterCompanyComponent } from '@molecules/inputs-form-register-company/inputs-form-register-company.component';
import { userRegister } from '@models/userRegister';
import { TittleFormRegisterCompanyComponent } from '@atoms/tittle-form-register-company/tittle-form-register-company.component';
import { TextFormRegisterCompanyComponent } from '@atoms/text-form-register-company/text-form-register-company.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';

@Component({
  selector: 'app-group-form-register-inetrmediary',
  standalone: true,
  imports: [CommonModule, 
    ImgFormRegisterCompanyComponent,
    ButtonsFormRegisterCompanyComponent,
    InputsFormRegisterCompanyComponent,
    TittleFormRegisterCompanyComponent,
    VehicleCompanyComponent,
    TextFormRegisterCompanyComponent
  ],
  templateUrl: './group-form-register-inetrmediary.component.html',
  styleUrl: './group-form-register-inetrmediary.component.scss'
})
export class GroupFormRegisterInetrmediaryComponent {
   
  dataform2 = [
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