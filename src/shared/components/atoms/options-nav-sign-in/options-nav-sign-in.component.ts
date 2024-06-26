import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-nav-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './options-nav-sign-in.component.html',
  styleUrl: './options-nav-sign-in.component.scss',
})
export class OptionsNavSignInComponent {
  @Input() options = '';
  @Input() path = '';
}
