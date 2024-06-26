import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-login-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './btn-login-sign-in.component.html',
  styleUrl: './btn-login-sign-in.component.scss',
})
export class BtnLoginSignInComponent {
  @Input() btnOption = '';
}
