import { Component } from '@angular/core';

@Component({
  selector: 'app-option-forget-password-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './option-forget-password-sign-in.component.html',
  styleUrl: './option-forget-password-sign-in.component.scss',
})
export class OptionForgetPasswordSignInComponent {
  path: string = 'forgetPassword';
  name: string = 'Olvide mi contraseña';
}
