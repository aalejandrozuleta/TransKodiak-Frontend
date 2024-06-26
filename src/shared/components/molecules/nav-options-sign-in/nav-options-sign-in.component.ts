import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OptionsNavSignInComponent } from '@atoms/options-nav-sign-in/options-nav-sign-in.component';

@Component({
  selector: 'app-nav-options-sign-in',
  standalone: true,
  imports: [OptionsNavSignInComponent, CommonModule],
  templateUrl: './nav-options-sign-in.component.html',
  styleUrl: './nav-options-sign-in.component.scss',
})
export class NavOptionsSignInComponent {
  optionsNav = [
    {
      name: 'Iniciar Sesión',
      link: '/signIn',
    },
    {
      name: 'Registrarse',
      link: '/signUp',
    },
  ];
}
