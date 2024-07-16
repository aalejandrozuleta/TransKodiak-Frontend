import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImgFormRegisterCompanyComponent } from '@atoms/img-form-register-company/img-form-register-company.component';
import { userRegister } from '@models/userRegister';
import { TextFormRegisterCompanyComponent } from '@atoms/text-form-register-company/text-form-register-company.component';
import { TitleFormRegisterIntermediaryComponent } from '@atoms/title-form-register-intermediary/title-form-register-intermediary.component';
import { ButtonsFormRegisterIntermediaryComponent } from '@molecules/buttons-form-register-intermediary/buttons-form-register-intermediary.component';
import { InputsFormRegisterIntermediaryComponent } from '@molecules/inputs-form-register-intermediary/inputs-form-register-intermediary.component';
import { InputFormRegisterIntermediaryComponent } from "../../atoms/input-form-register-intermediary/input-form-register-intermediary.component";


@Component({
  selector: 'app-group-form-register-intermediary',
  standalone: true,
  imports: [CommonModule,
    ImgFormRegisterCompanyComponent,
    ButtonsFormRegisterIntermediaryComponent,
    InputsFormRegisterIntermediaryComponent,
    TitleFormRegisterIntermediaryComponent,
    TextFormRegisterCompanyComponent, InputFormRegisterIntermediaryComponent],
  templateUrl: './group-form-register-intermediary.component.html',
  styleUrl: './group-form-register-intermediary.component.scss'
})
export class GroupFormRegisterIntermediaryComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';

  dataform1 = [
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
      type: 'password',
      placeholder: 'Contraseña',
      fild: 'password' 
    },
  ];
}
