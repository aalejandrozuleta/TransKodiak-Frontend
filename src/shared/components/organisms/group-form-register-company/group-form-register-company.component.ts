import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ImgFormRegisterCompanyComponent } from '@atoms/img-form-register-company/img-form-register-company.component';
import { ButtonsFormRegisterCompanyComponent } from '@molecules/buttons-form-register-company/buttons-form-register-company.component';
import { InputsFormRegisterCompanyComponent } from '@molecules/inputs-form-register-company/inputs-form-register-company.component';
import { userRegister } from '@models/userRegister';
import { TittleFormRegisterCompanyComponent } from '@atoms/tittle-form-register-company/tittle-form-register-company.component';
import { TextFormRegisterCompanyComponent } from '@atoms/text-form-register-company/text-form-register-company.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';


@Component({
  selector: 'app-group-form-register-company',
  standalone: true,
  imports: [CommonModule, 
    ImgFormRegisterCompanyComponent,
    ButtonsFormRegisterCompanyComponent,
    InputsFormRegisterCompanyComponent,
    TittleFormRegisterCompanyComponent,
    VehicleCompanyComponent,
    TextFormRegisterCompanyComponent
  ],
  templateUrl: './group-form-register-company.component.html',
  styleUrl: './group-form-register-company.component.scss'
})
export class GroupFormRegisterCompanyComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  
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
      label: 'Nit',
      id: 'nit',
      type: 'text',
      placeholder: 'Nit',
      fild: 'nit'
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
