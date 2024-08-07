import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { BtnLoginSignInComponent } from '@atoms/btn-login-sign-in/btn-login-sign-in.component';
import { TitleSignInComponent } from '@atoms/title-sign-in/title-sign-in.component';
import { InputsBlockSignInComponent } from '@atoms/inputs-block-sign-in/inputs-block-sign-in.component';
import { NavOptionsSignInComponent } from '@molecules/nav-options-sign-in/nav-options-sign-in.component';
import { OptionsUserSignInComponent } from '@molecules/options-user-sign-in/options-user-sign-in.component';


@Component({
  selector: 'app-form-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    InputsBlockSignInComponent,
    NavOptionsSignInComponent,
    OptionsUserSignInComponent,
    BtnLoginSignInComponent,
    TitleSignInComponent,
  ],
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.scss',
})
export class FormSignInComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';

  titleForm = 'INICIAR SESION';
  optionBtn = 'Iniciar';

  formInputs = [
    {
      img: '../../../../assets/icons/user-icon.png',
      placeholder: 'Correo electrónico',
      type: 'email',
      name: 'email',
      fild: 'email',
    },
    {
      img: '../../../../assets/icons/secury-icon.png',
      placeholder: 'Contraseña',
      type: 'password',
      name: 'password',
      fild: 'password',
    },
  ];
}
