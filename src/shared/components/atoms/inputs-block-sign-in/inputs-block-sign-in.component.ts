import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs-block-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './inputs-block-sign-in.component.html',
  styleUrl: './inputs-block-sign-in.component.scss',
})
export class InputsBlockSignInComponent {
  @Input() img: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
}
