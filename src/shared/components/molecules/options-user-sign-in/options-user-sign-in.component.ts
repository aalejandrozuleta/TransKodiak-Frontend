import { Component } from '@angular/core';
import { OptionForgetPasswordSignInComponent } from '@atoms/option-forget-password-sign-in/option-forget-password-sign-in.component';
import { OptionsRememberSignInComponent } from '@atoms/options-remember-sign-in/options-remember-sign-in.component';

@Component({
  selector: 'app-options-user-sign-in',
  standalone: true,
  imports: [
    OptionForgetPasswordSignInComponent,
    OptionsRememberSignInComponent,
  ],
  templateUrl: './options-user-sign-in.component.html',
  styleUrl: './options-user-sign-in.component.scss',
})
export class OptionsUserSignInComponent {}
