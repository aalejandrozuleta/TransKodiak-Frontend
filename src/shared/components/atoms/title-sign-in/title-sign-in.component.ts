import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './title-sign-in.component.html',
  styleUrl: './title-sign-in.component.scss',
})
export class TitleSignInComponent {
  @Input() titleForm: string = '';
}
