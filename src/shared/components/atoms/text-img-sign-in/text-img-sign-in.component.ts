import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-img-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './text-img-sign-in.component.html',
  styleUrl: './text-img-sign-in.component.scss',
})
export class TextImgSignInComponent {
  @Input() text: string = '';
}
